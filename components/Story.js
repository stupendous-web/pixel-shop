import { useEffect, useState } from "react";
import { useTime } from "../lib/context";
import axios from "axios";

export default function Story() {
  const { daytime } = useTime();

  const [page, setPage] = useState();
  useEffect(() => {
    axios
      .get("https://cms.thepixelshop.app/wp-json/wp/v2/pages?slug=story")
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
            ? "var(--daytime-shade-5)"
            : "var(--nighttime-shade-5)",
          transition: "var(--transition)",
        }}
        id={"Story"}
      >
        <div className={"uk-container"}>
          <div className={daytime ? undefined : "uk-light"}>
            <h2 style={{ transition: "var(--transition)" }}>
              {page?.title.rendered}
            </h2>
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
