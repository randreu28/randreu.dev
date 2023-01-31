import { TextScramble } from "@a7sc11u/scramble";

const text: string[] = [
  "design experiences",
  "love to innovate",
  "think creatively",
  "solve problems",
];

interface Props {
  tic: number;
}

export default function DynamicText({ tic }: Props) {
  return (
    <TextScramble
      className="bg-[#ef079b] bg-gradient-to-br text-transparent from-[#f8665d] via-[#f8665d] bg-clip-text"
      as="span"
      text={text[tic]}
    />
  );
}
