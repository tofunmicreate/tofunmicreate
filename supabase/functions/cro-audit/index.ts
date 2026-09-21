const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const RECOMMENDATION_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["summary", "recommendations"],
  properties: {
    summary: {
      type: "string",
      description: "2-3 sentence plain-English overview of the biggest conversion problems seen.",
    },
    recommendations: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["title", "priority", "area", "problem", "fix", "expected_impact", "effort"],
        properties: {
          title: { type: "string" },
          priority: { type: "string", enum: ["high", "medium", "low"] },
          area: {
            type: "string",
            description: "Page area, e.g. hero, product page, cart, checkout, navigation, trust.",
          },
          problem: { type: "string" },
          fix: { type: "string" },
          expected_impact: { type: "string" },
          effort: { type: "string", enum: ["quick win", "medium", "large"] },
        },
      },
    },
  },
} as const;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!lovableApiKey) {
      return Response.json(
        { error: "AI is not configured yet. Please try again later." },
        { status: 500, headers: corsHeaders },
      );
    }

    const { goals, storeType, images } = await req.json();

    if (!Array.isArray(images) || images.length === 0) {
      return Response.json(
        { error: "Please upload at least one screenshot." },
        { status: 400, headers: corsHeaders },
      );
    }
    if (images.length > 4) {
      return Response.json(
        { error: "Please upload no more than 4 screenshots." },
        { status: 400, headers: corsHeaders },
      );
    }
    if (typeof goals !== "string" || goals.trim().length < 10) {
      return Response.json(
        { error: "Please describe your conversion goal in a little more detail." },
        { status: 400, headers: corsHeaders },
      );
    }

    const content: Array<Record<string, unknown>> = [
      {
        type: "input_text",
        text: [
          "You are a senior Shopify conversion rate optimization consultant at Tofunmi Creative.",
          "Review the attached page screenshots and return prioritized, specific CRO recommendations.",
          storeType ? `Store type: ${storeType}` : "",
          `Conversion goal from the store owner: ${goals.trim()}`,
          "Rules: reference what you can actually see in the screenshots, be concrete (copy, layout, trust, offer, friction), and order recommendations with highest revenue impact first. Return between 5 and 8 recommendations. Use simple English and no em dashes.",
        ]
          .filter(Boolean)
          .join("\n"),
      },
    ];

    for (const image of images) {
      if (typeof image === "string" && image.startsWith("data:image/")) {
        content.push({ type: "input_image", image_url: image });
      }
    }

    const initialRunId = req.headers.get("X-Lovable-AIG-Run-ID")?.trim();

    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": lovableApiKey,
        "X-Lovable-AIG-SDK": "fetch",
        ...(initialRunId ? { "X-Lovable-AIG-Run-ID": initialRunId } : {}),
      },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        input: [{ role: "user", content }],
        stream: true,
        store: false,
        reasoning: { effort: "medium" },
        text: {
          format: {
            type: "json_schema",
            name: "cro_recommendations",
            strict: true,
            schema: RECOMMENDATION_SCHEMA,
          },
        },
      }),
    });

    if (!aiResponse.ok) {
      const detail = await aiResponse.text();
      console.error("AI gateway error", aiResponse.status, detail);
      const message =
        aiResponse.status === 429
          ? "The audit tool is busy right now. Please try again in a moment."
          : aiResponse.status === 402
            ? "AI credits are used up. Please add credits and try again."
            : "The audit could not be generated. Please try again.";
      return Response.json({ error: message }, { status: aiResponse.status, headers: corsHeaders });
    }

    // Reasoning runs stream; accumulate the output text server-side.
    const reader = aiResponse.body!.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let text = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (!payload || payload === "[DONE]") continue;
        try {
          const event = JSON.parse(payload);
          if (event.type === "response.output_text.delta" && typeof event.delta === "string") {
            text += event.delta;
          } else if (event.type === "response.completed" && !text) {
            text = event.response?.output_text ?? "";
          }
        } catch {
          // ignore non-JSON keepalives
        }
      }
    }

    if (!text.trim()) {
      return Response.json(
        { error: "The model did not return an audit. Please try again." },
        { status: 502, headers: corsHeaders },
      );
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      console.error("Unparsable model output", text.slice(0, 500));
      return Response.json(
        { error: "The audit came back in an unexpected format. Please try again." },
        { status: 502, headers: corsHeaders },
      );
    }

    return Response.json(parsed, { headers: corsHeaders });
  } catch (error) {
    console.error("cro-audit failed", error);
    return Response.json(
      { error: "Something went wrong generating your audit." },
      { status: 500, headers: corsHeaders },
    );
  }
});
