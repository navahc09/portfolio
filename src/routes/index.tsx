import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shubham Chavan | Backend & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Shubham Chavan | Backend Systems, AI Agents, and Competitive Programming. B.E. IT at PICT, Pune.",
      },
      { property: "og:title", content: "Shubham Chavan | Backend & AI Engineer" },
      {
        property: "og:description",
        content:
          "Backend systems, autonomous AI workflows, and competitive programming. Selected work, open source, and achievements.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
