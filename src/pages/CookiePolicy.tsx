import { PolicyLayout } from "@/components/PolicyLayout";

const CookiePolicy = () => (
  <PolicyLayout
    title="Cookie Policy"
    description="What cookies and tracking technologies this site uses, and how to control them."
    updated="September 15, 2026"
  >
    <p>
      This policy explains how Tofunmi Creative uses cookies and similar technologies on this
      website, in plain language.
    </p>

    <h2>What are cookies?</h2>
    <p>
      Cookies are small text files stored on your device when you visit a website. They help
      sites work properly, remember preferences, and understand how visitors use them.
    </p>

    <h2>Cookies we use</h2>
    <ul>
      <li>
        <strong>Essential cookies.</strong> Needed for the site to function (for example,
        remembering that you've dismissed a notice). These can't be switched off.
      </li>
      <li>
        <strong>Analytics cookies.</strong> If we enable an analytics tool, these cookies collect
        anonymous statistics — which pages are visited, how long visitors stay, and roughly where
        visitors are located. This helps us improve the site. We never use this data to identify
        you personally.
      </li>
      <li>
        <strong>Third-party embeds.</strong> Our booking button opens Calendly, and our footer
        links to Instagram, X (Twitter), and LinkedIn. Those services may set their own cookies
        once you interact with them, governed by their respective privacy policies.
      </li>
    </ul>

    <h2>What we don't do</h2>
    <ul>
      <li>We don't run advertising or retargeting pixels on this site.</li>
      <li>We don't sell cookie data to anyone.</li>
    </ul>

    <h2>Managing cookies</h2>
    <p>
      You can control or delete cookies through your browser settings — every major browser
      (Chrome, Safari, Firefox, Edge) lets you block or remove them. Blocking all cookies may
      affect how some websites work, though this site remains usable.
    </p>

    <h2>Changes to this policy</h2>
    <p>
      If we add new analytics or tracking tools, we'll update this page and note the change in
      the "last updated" date above.
    </p>

    <h2>Questions</h2>
    <p>
      Email <a href="mailto:tofunmicreative@gmail.com">tofunmicreative@gmail.com</a> with any
      questions about cookies on this site.
    </p>
  </PolicyLayout>
);

export default CookiePolicy;
