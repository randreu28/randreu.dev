import { atom } from "jotai";

export const sections = [
  { name: "Home", href: "home" },
  { name: "Background", href: "background" },
  { name: "Experience", href: "experience"},
  { name: "Get in touch", href: "get-in-touch" },
] as const;

export type ActiveSection = (typeof sections)[number]["href"];

export const ticAtom = atom<number>(0);
export const activeSectionAtom = atom<ActiveSection>(sections[0].href);
