import { useEffect, useState } from "react";
import { useTime } from "../lib/context";
import axios from "axios";

export default function FAQ() {
  const { daytime } = useTime();

  const [posts, setPosts] = useState();
  useEffect(() => {
    axios
      .get(
        "https://cms.thepixelshop.app/wp-json/wp/v2/posts?categories=9&_embed"
      )
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <>
      <div
        className={"uk-section uk-light"}
        style={{
          backgroundColor: daytime
            ? "var(--daytime-shade-5)"
            : "var(--nighttime-shade-2)",
          transition: "var(--transition)",
        }}
        id={"FAQ"}
      >
        <div className={"uk-container"}>
          <div className={daytime ? undefined : "uk-light"}>
            <h2 style={{ transition: "var(--transition)" }}>FAQ</h2>
            <ul uk-accordion={""}>
              {posts?.map((post, key) => {
                return (
                  <li key={key}>
                    <a className={"uk-accordion-title"} href={"#"}>
                      {post?.title.rendered}
                    </a>
                    <div
                      className={"uk-accordion-content"}
                      dangerouslySetInnerHTML={{
                        __html: post?.content.rendered,
                      }}
                    ></div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
