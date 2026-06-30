import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <GoogleTagManager gtmId="GTM-PCWB5MWV" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
