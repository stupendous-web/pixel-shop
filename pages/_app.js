import uikit from "uikit";
import "../styles/uikit/uikit.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { wrapper, store } from "../redux/store";
import { Provider } from "react-redux";
import Analytics from "../components/Analytics";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Analytics site={"pixel-shop"} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
