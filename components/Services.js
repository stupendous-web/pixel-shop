import { useEffect, useState } from "react";
import axios from "axios";

export default function Services() {
  const [page, setPage] = useState();
  useEffect(() => {
    axios
      .get("https://cms.thepixelshop.app/wp-json/wp/v2/pages?slug=services")
      .then((response) => {
        setPage(response.data[0]);
      });
  }, []);

  return (
    <>
      <div
        className={"uk-section"}
        style={{
          backgroundColor: "var(--wood)",
          transition: "var(--transition)",
        }}
        id={"Services"}
      >
        <div className={"uk-container"}>
          <img
            src={"/images/services.png"}
            alt={"The Pixel Shop"}
            className={"uk-width-1-1"}
          />
          <h2
            style={{
              color: "var(--daytime-shade-2)",
              transition: "var(--transition)",
            }}
          >
            {page?.title.rendered}
          </h2>{" "}
          <div
            dangerouslySetInnerHTML={{ __html: page?.content.rendered }}
            style={{
              color: "var(--daytime-shade-2)",
              transition: "var(--transition)",
            }}
          />
        </div>
      </div>
    </>
  );
}
