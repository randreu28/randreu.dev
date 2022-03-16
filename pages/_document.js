import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en"> {/* At least until I implent i18n routing..*/}
      <Head />
      <body className="bg-myDark text-white overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
