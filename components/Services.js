import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Services() {
  const daytime = useSelector((state) => state.daytime);
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
          backgroundColor: daytime
            ? "var(--silver-fern)"
            : "var(--metropolitan-silhouette)",
          transition: "var(--transition)",
        }}
        id={"Services"}
      >
        <div className={"uk-container"}>
          <div className={daytime ? undefined : "uk-light"}>
            <h2 style={{ transition: "var(--transition)" }}>
              {page?.title.rendered}
            </h2>{" "}
            <div
              dangerouslySetInnerHTML={{ __html: page?.content.rendered }}
              style={{ transition: "var(--transition)" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
