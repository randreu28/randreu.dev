import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/media/logo.svg" />
      </Head>
      <body className="bg-myDark text-white overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
