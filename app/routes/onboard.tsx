import { OnboardComponent } from "~/components/onboard/index.js";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ArtistConnect" },
    { name: "description", content: "Welcome to Artist Connect!" },
  ];
}

export default function Onboard() {
  return <OnboardComponent />;
}
