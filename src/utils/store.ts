import { atom } from "jotai";

export const sections = [
  { name: "Home", href: "home" },
  { name: "About me", href: "about-me" },
  { name: "Contact me", href: "contact-me" },
];

export const ticAtom = atom<number>(0);
export const activeSectionAtom = atom<string>(sections[0].href);
