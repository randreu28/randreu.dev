import { ticAtom } from "@/utils/store";
import { TextScramble } from "@a7sc11u/scramble";
import { useAtomValue } from "jotai";

const text: string[] = [
  "design experiences",
  "love to innovate",
  "think creatively",
  "solve problems",
];

export default function DynamicText() {
  const tic = useAtomValue(ticAtom);
  return (
    <TextScramble
      className="bg-[#ef079b] bg-gradient-to-br text-transparent from-[#f8665d] via-[#f8665d] bg-clip-text"
      as="span"
      text={text[tic]}
    />
  );
}
