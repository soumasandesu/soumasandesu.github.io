import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&amp;Kosugi+Maru&amp;family=M+PLUS+1p:wght@800&amp;family=M+PLUS+Rounded+1c:wght@800&amp;family=Noto+Serif+JP:wght@900&amp;family=Kaisei+Decol:wght@400;700&amp;family=Potta+One&amp;family=Yuji+Mai&amp;family=Hachi+Maru+Pop&amp;display=swap" />

        <meta name="description" content="null" />
        <meta property="og:site_name" content="soumasandesu.github.io" />
        <meta property="og:url" content="https://soumasandesu.github.io" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {
          [{ property: "og:title" }, { name: "twitter:title" }].map(e => <meta key={JSON.stringify(e)} content="Souma 相馬" {...e} />)
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
