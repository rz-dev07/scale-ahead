import { createFileRoute } from "@tanstack/react-router";
import PolicyPage from "@/components/PolicyPage";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Scaleahead" },
      {
        name: "description",
        content: "Terms governing the use of Scaleahead's website and services.",
      },
      { property: "og:title", content: "Terms of Service — Scaleahead" },
      {
        property: "og:description",
        content: "Terms governing the use of Scaleahead's website and services.",
      },
    ],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <PolicyPage
      badge="Legal"
      title="Terms of Service"
      lastUpdated="April 2026"
      sections={[
        {
          heading: "Acceptance of Terms",
          paragraphs: [
            "By accessing and using the Scaleahead website, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website.",
          ],
        },
        {
          heading: "Services",
          paragraphs: [
            "Scaleahead provides digital marketing services including Meta Ads, Google Ads, SEO, Lead Generation, Social Media Management, and Website Development. Specific service terms are outlined in individual client agreements.",
          ],
        },
        {
          heading: "Client Responsibilities",
          list: [
            "Provide accurate business information",
            "Grant necessary access to ad accounts when required",
            "Communicate feedback in a timely manner",
            "Adhere to payment terms as agreed",
          ],
        },
        {
          heading: "Intellectual Property",
          paragraphs: [
            "All content, strategies, and creative assets developed by Scaleahead remain the intellectual property of Scaleahead until full payment is received.",
          ],
        },
        {
          heading: "Limitation of Liability",
          paragraphs: [
            "Scaleahead is not liable for indirect or consequential losses. Our liability is limited to the fees paid for the specific service in question.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: ["For any queries regarding these terms: team@scaleahead.in"],
        },
      ]}
    />
  );
}
