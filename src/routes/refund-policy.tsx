import { createFileRoute } from "@tanstack/react-router";
import PolicyPage from "@/components/PolicyPage";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Scaleahead" },
      {
        name: "description",
        content: "Scaleahead's refund policy for digital marketing services.",
      },
      { property: "og:title", content: "Refund Policy — Scaleahead" },
      {
        property: "og:description",
        content: "Scaleahead's refund policy for digital marketing services.",
      },
    ],
  }),
  component: RefundPolicy,
});

function RefundPolicy() {
  return (
    <PolicyPage
      badge="Legal"
      title="Refund Policy"
      lastUpdated="April 2026"
      sections={[
        {
          heading: "General Policy",
          paragraphs: [
            "Due to the nature of digital marketing services, all payments made to Scaleahead are non-refundable once work has commenced. We encourage clients to review all proposals thoroughly before making payment.",
          ],
        },
        {
          heading: "Exceptions",
          paragraphs: ["Refunds may be considered in the following cases:"],
          list: [
            "Service was not delivered as agreed in writing",
            "Project was cancelled by Scaleahead before commencement",
            "Duplicate payment was made in error",
          ],
        },
        {
          heading: "Requesting a Refund",
          paragraphs: [
            "To request a refund, email us at team@scaleahead.in within 7 days of the issue arising, with your invoice number and a description of the concern.",
          ],
        },
        {
          heading: "Resolution Timeline",
          paragraphs: [
            "We aim to resolve all refund requests within 7–10 business days of receiving your request.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: ["For refund-related queries: team@scaleahead.in | +91 79805 55967"],
        },
      ]}
    />
  );
}
