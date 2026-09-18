import { Link } from "react-router-dom";
import { PolicyLayout } from "@/components/PolicyLayout";

const PrivacyPolicy = () => (
  <PolicyLayout
    title="Privacy Policy"
    description="How Tofunmi Creative collects, uses, and protects your information."
    updated="September 15, 2026"
  >
    <p>
      Tofunmi Creative ("we", "us") respects your privacy. This policy explains, in plain
      language, what information we collect when you visit tofunmicreate.lovable.app or contact
      us, and what we do with it.
    </p>

    <h2>What we collect</h2>
    <ul>
      <li>
        <strong>Contact details you give us.</strong> When you email us, book a free audit through
        Calendly, or fill in a contact form, we receive your name, email address, and any
        information you choose to share about your business.
      </li>
      <li>
        <strong>Usage data.</strong> If analytics tools are active on this site, we may collect
        basic information about how visitors use the site, pages viewed, approximate location
        (country/city), device and browser type, and how long pages are visited. This data is
        aggregated and does not identify you personally.
      </li>
      <li>
        <strong>Cookies.</strong> See our{" "}
        <a href="/cookie-policy">Cookie Policy</a> for details.
      </li>
    </ul>

    <h2>How we use your information</h2>
    <ul>
      <li>To respond to your enquiries and provide the services you request.</li>
      <li>To prepare audits, proposals, and project deliverables for you.</li>
      <li>To understand how the site is used so we can improve it.</li>
      <li>To send occasional updates about our services, only if you've asked us to, and you can opt out at any time.</li>
    </ul>

    <h2>What we never do</h2>
    <ul>
      <li>We never sell or rent your personal information.</li>
      <li>We never share your business data with third parties except the tools we need to run our work (for example Calendly for scheduling, or email providers), each governed by their own privacy policies.</li>
    </ul>

    <h2>How long we keep it</h2>
    <p>
      We keep enquiry and client information only as long as needed to deliver our services and
      meet legal or accounting obligations. You can ask us to delete your information at any time.
    </p>

    <h2>Your rights</h2>
    <p>
      You may request a copy of the personal information we hold about you, ask us to correct or
      delete it, or withdraw consent for marketing messages. Email us at{" "}
      <a href="mailto:info@tofunmicreative.site">info@tofunmicreative.site</a> and we'll respond
      within a reasonable time.
    </p>

    <h2>Third-party services</h2>
    <p>
      This site links to Calendly for booking and may embed or link to social platforms
      (Instagram, X/Twitter, LinkedIn). When you use those services, their own privacy policies
      apply.
    </p>

    <h2>Questions</h2>
    <p>
      Contact us at <a href="mailto:info@tofunmicreative.site">info@tofunmicreative.site</a> with
      any questions about this policy.
    </p>
  </PolicyLayout>
);

export default PrivacyPolicy;
