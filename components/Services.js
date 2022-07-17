import { useEffect, useState } from "react";
import { useTime } from "../lib/context";
import axios from "axios";

export default function Services() {
  const { daytime } = useTime();
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
        className={"uk-section uk-padding-remove-top"}
        style={{
          backgroundColor: "var(--wood)",
          transition: "var(--transition)",
        }}
        id={"Services"}
      >
        <div className={"uk-container"} style={{ maxWidth: "1720px" }}>
          <img
            src={
              daytime ? "/images/services.png" : "/images/services-inverse.png"
            }
            alt={"The Pixel Shop"}
            className={"uk-margin-bottom"}
            style={{ marginTop: "-3rem" }}
          />
        </div>
        <div className={"uk-container"}>
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
