import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <div className="flex items-center justify-center min-h-screen">WIP</div>;
}
