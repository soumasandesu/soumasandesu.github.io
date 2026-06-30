import PagesNavigator from "@/components/PagesNavigator";
import "@/styles/_app.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <PagesNavigator
        items={[
          { name: "main", url: "/" },
          { name: "cos gallery", url: "/cos_gallery" },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}
