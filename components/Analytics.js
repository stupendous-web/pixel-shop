import { useEffect } from "react";
import { Analytics as DWAnalytics } from "analytics";
import axios from "axios";

export default function Analytics({ site }) {
  const analytics = DWAnalytics({});
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      analytics
        .page((data) => {
          const properties = data.payload.properties;
          axios.post("https://analytics.stupendousweb.com/api/capture", {
            site: site,
            anonymousId: data.payload.anonymousId,
            path: properties.path,
            referrer: properties.referrer,
            height: properties.height,
            width: properties.width,
          });
        })
        .then();
    }
  }, []);
}
