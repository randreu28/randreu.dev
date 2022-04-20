import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body className="bg-myDark text-white overflow-x-hidden"> {/* Check _app for page-specific <body> styling */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
