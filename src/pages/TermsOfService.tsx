import { Link } from "react-router-dom";
import { PolicyLayout } from "@/components/PolicyLayout";

const TermsOfService = () => (
  <PolicyLayout
    title="Terms of Service"
    description="The basics of working with Tofunmi Creative."
    updated="September 15, 2026"
  >
    <p>
      These terms cover what it's like to work with Tofunmi Creative ("we", "us"). By engaging
      our services or using this website, you agree to them.
    </p>

    <h2>Our services</h2>
    <p>
      We provide Shopify store design and development, conversion rate optimization (CRO), AI
      website building, AEO (Answer Engine Optimization), and product launch marketing for small
      businesses, startups, and solo founders. The exact scope of any project is agreed with you
      in writing (email or proposal) before work begins.
    </p>

    <h2>Getting started</h2>
    <p>
      Most projects start with a free audit call. After that, we'll send a proposal covering the
      scope, timeline, and price. Work begins once you approve the proposal and any required
      deposit is paid.
    </p>

    <h2>Payment terms</h2>
    <ul>
      <li>Prices are quoted per project or as a monthly retainer, in the currency stated in the proposal.</li>
      <li>Project work typically requires a deposit (commonly 50%) upfront, with the balance due on delivery unless otherwise agreed.</li>
      <li>Retainers are billed monthly in advance.</li>
      <li>Invoices are due within 7 days unless stated otherwise. Late payments may pause active work.</li>
      <li>Third-party costs (apps, themes, ad spend, software subscriptions) are billed separately and approved by you first.</li>
    </ul>

    <h2>What we need from you</h2>
    <p>
      Timely access to your store, brand assets, and feedback keeps projects on schedule. Delays
      in approvals or materials may shift timelines.
    </p>

    <h2>Revisions and approvals</h2>
    <p>
      Each project includes the number of revision rounds stated in your proposal. Additional
      revisions are quoted separately. Once you approve a deliverable, further changes are
      treated as new work.
    </p>

    <h2>Ownership</h2>
    <p>
      When a project is fully paid, you own the final deliverables we created for you. We retain
      the right to showcase the work in our portfolio unless you ask us not to. Pre-existing
      tools, frameworks, and know-how remain ours.
    </p>

    <h2>Results disclaimer</h2>
    <p>
      We use proven, data-driven methods, but we can't guarantee specific revenue, conversion
      rate, or ranking outcomes, no honest agency can. Any figures shown on this site are
      illustrative examples.
    </p>

    <h2>Liability</h2>
    <p>
      Our total liability for any claim related to our services is limited to the amount you paid
      us for the service in question. We're not liable for indirect or consequential losses, such
      as lost profits or lost data caused by third-party platforms.
    </p>

    <h2>Termination</h2>
    <p>
      Either side can end an engagement with written notice. See our{" "}
      <Link to="/refund-policy" className="text-accent underline">Refund &amp; Cancellation Policy</Link> for how payments and refunds
      are handled when a project ends early.
    </p>

    <h2>Questions</h2>
    <p>
      Email <a href="mailto:info@tofunmicreative.site">info@tofunmicreative.site</a> with any
      questions about these terms.
    </p>
  </PolicyLayout>
);

export default TermsOfService;
