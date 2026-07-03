import PagesNavigator from "@/components/PagesNavigator";
import Footer from "@/components/Footer";

import "@/styles/_app.scss";

export async function getStaticProps() {
  const buildDate = new Date().toISOString().split('T')[0];

  return {
    props: {
      buildDate,
    },
  };
}

export default function App({ Component, pageProps: { buildDate, ...pageProps } }) {
  return (
    <>
      <PagesNavigator
        items={[
          { name: "main", url: "/" },
          { name: "cos gallery", url: "/cos_gallery" },
          { name: "3d showcases", url: "/3d_showcases" },
          { name: "cos travel guide", url: "/cos_travel_guide" },
        ]}
      />
      <Component {...pageProps} />
      <Footer>
        {buildDate}
      </Footer>
    </>
  );
}
