import uikit from "uikit";
import "../styles/uikit/uikit.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Analytics from "../components/Analytics";
import { Provider } from "../lib/context";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <Analytics site={"pixel-shop"} />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
