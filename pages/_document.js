import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <title>Randreu.dev</title>
        <link rel="shortcut icon" href="/media/logo.svg" />
      </Head>
      <body className="bg-myDark text-white overflow-x-hidden">
        {/* Check _app for page-specific <body> styling */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
