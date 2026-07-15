import PagesNavigator from "@/components/PagesNavigator";
import "@/styles/_app.scss";

const newTab = { target: "_blank" };
const external = { rel: "noopener noreferrer", style: { cursor: "alias" } };

export default function App({ Component, pageProps }) {
  return (
    <>
      <PagesNavigator
        items={[
          { name: "main", url: "/" },
          { name: "cos gallery", url: "/cos_gallery" },
          { name: "3d showcases", url: "/3d_showcases" },
          { name: "cos travel guide", url: "/cos_travel_guide" },
          { name: "cos-plan-templater", url: "/cos-plan-templater", ...newTab, ...external },
          { name: "acg-doujin-event-map-drawer", url: "/acg-doujin-event-map-drawer", ...newTab, ...external },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}
