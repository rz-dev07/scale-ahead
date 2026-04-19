import { createFileRoute } from "@tanstack/react-router";
import PolicyPage from "@/components/PolicyPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Scaleahead" },
      {
        name: "description",
        content: "How Scaleahead collects, uses and protects your information.",
      },
      { property: "og:title", content: "Privacy Policy — Scaleahead" },
      {
        property: "og:description",
        content: "How Scaleahead collects, uses and protects your information.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <PolicyPage
      badge="Legal"
      title="Privacy Policy"
      lastUpdated="April 2026"
      sections={[
        {
          heading: "Information We Collect",
          paragraphs: [
            "We collect information you provide directly to us, such as your name, email address, phone number, and business details when you fill out our consultation form or contact us directly.",
          ],
        },
        {
          heading: "How We Use Your Information",
          list: [
            "To respond to your enquiries and provide requested services",
            "To send you relevant marketing information (with your consent)",
            "To improve our website and services",
            "To comply with legal obligations",
          ],
        },
        {
          heading: "WhatsApp Communication",
          paragraphs: [
            "When you submit our enquiry form, your details are shared via WhatsApp for consultation purposes only. We do not sell or share your data with third parties.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Our website uses cookies to improve your browsing experience. You can choose to disable cookies through your browser settings.",
          ],
        },
        {
          heading: "Contact Us",
          paragraphs: ["For any privacy-related queries, contact us at: team@scaleahead.in"],
        },
      ]}
    />
  );
}
