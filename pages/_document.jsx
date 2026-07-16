import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="null" />
        <meta property="og:site_name" content="soumasandesu.github.io" />
        <meta property="og:url" content="https://soumasandesu.github.io" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {
          [{ property: "og:title" }, { name: "twitter:title" }].map(e => <meta key={JSON.stringify(e)} content="Souma's Link-in-bio" {...e} />)
        }
        {
          [{ property: "og:description" }, { name: "twitter:description" }].map(e => <meta key={JSON.stringify(e)} content="Souma's Link-in-bio" {...e} />)
        }
        {
          [{ property: "og:image" }, { name: "twitter:image" }].map(e => <meta key={JSON.stringify(e)} content="/og_cover.png" {...e} />)
        }
      </Head>
      <body className="antialiased">
        <GoogleTagManager gtmId="GTM-PCWB5MWV" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
