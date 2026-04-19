import { createFileRoute } from "@tanstack/react-router";
import ComingSoon from "@/components/ComingSoon";

export const Route = createFileRoute("/coming-soon")({
  head: () => ({
    meta: [
      { title: "Coming Soon — Scaleahead" },
      { name: "description", content: "Our social pages are on their way. Stay tuned!" },
      { property: "og:title", content: "Coming Soon — Scaleahead" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ComingSoon,
});
