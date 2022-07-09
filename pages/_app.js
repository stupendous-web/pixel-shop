import { useEffect } from "react";
import uikit from "uikit";
import "../styles/uikit/uikit.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { wrapper } from "../redux/store";
import { init } from "@socialgouv/matomo-next";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init({ url: "https://analytics.stupendousweb.com/", siteId: 2 });
  }, []);
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
