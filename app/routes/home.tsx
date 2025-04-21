import Auth from "../components/auth/index.js";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ArtistConnect" },
    { name: "description", content: "Welcome to Artist Connect!" },
  ];
}

export default function Home() {
  return <Auth />;
}
