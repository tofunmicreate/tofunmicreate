import { PolicyLayout } from "@/components/PolicyLayout";

const RefundPolicy = () => (
  <PolicyLayout
    title="Refund & Cancellation Policy"
    description="How cancellations, pauses, and refunds work at Tofunmi Creative."
    updated="September 15, 2026"
  >
    <p>
      We keep this simple and fair. Here's exactly how cancellations and refunds work when you
      engage Tofunmi Creative.
    </p>

    <h2>Free audits</h2>
    <p>
      The initial audit call is completely free with no obligation. You can cancel or reschedule
      a booked call any time via the Calendly link in your confirmation email.
    </p>

    <h2>Project-based work</h2>
    <ul>
      <li>
        <strong>Before work starts:</strong> If you cancel after paying a deposit but before any
        work has begun, you get a full refund.
      </li>
      <li>
        <strong>Once work has started:</strong> Deposits cover time already spent. If you cancel
        partway through, we invoice only for completed milestones and hours worked, and refund
        the rest of the deposit.
      </li>
      <li>
        <strong>On delivery:</strong> Final payments for approved, delivered work are
        non-refundable.
      </li>
    </ul>

    <h2>Monthly retainers</h2>
    <ul>
      <li>
        Retainers can be cancelled or paused with 14 days' written notice before the next billing
        date.
      </li>
      <li>
        Paid months are generally non-refundable, since the work is already scheduled and
        performed — but if we've failed to deliver the agreed scope in a month, we'll make it
        right with additional work or a partial refund.
      </li>
    </ul>

    <h2>When we'll always refund</h2>
    <ul>
      <li>You were charged in error or charged twice.</li>
      <li>We cancel the project for reasons within our control.</li>
      <li>We cannot start your project within a reasonable time of the agreed start date.</li>
    </ul>

    <h2>How refunds are processed</h2>
    <p>
      Approved refunds are returned via the original payment method within 10 business days. Any
      non-recoverable third-party costs (e.g. paid apps, ad spend) already incurred on your
      behalf cannot be refunded.
    </p>

    <h2>How to cancel</h2>
    <p>
      Email <a href="mailto:tofunmicreative@gmail.com">tofunmicreative@gmail.com</a> with your
      name and project details. We'll confirm within 2 business days.
    </p>
  </PolicyLayout>
);

export default RefundPolicy;
