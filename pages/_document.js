import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body className="bg-myDark text-white overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
