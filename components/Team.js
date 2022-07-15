import { useEffect, useState } from "react";
import { useTime } from "../lib/context";
import axios from "axios";

export default function Team() {
  const { daytime } = useTime();

  const [posts, setPosts] = useState();
  const [category, setCategory] = useState();
  useEffect(() => {
    axios
      .get(
        "https://cms.thepixelshop.app/wp-json/wp/v2/posts?categories=6&_embed"
      )
      .then((response) => {
        setPosts(response.data);
      });
    axios
      .get("https://cms.thepixelshop.app/wp-json/wp/v2/categories/6")
      .then((response) => {
        setCategory(response.data);
      });
  }, []);

  return (
    <>
      <div
        className={"uk-section"}
        style={{
          backgroundColor: daytime
            ? "var(--daytime-shade-3)"
            : "var(--nighttime-shade-3)",
          transition: "var(--transition)",
        }}
        id={"Team"}
      >
        <div className={"uk-container"}>
          <h2
            style={{
              color: daytime
                ? "var(--daytime-shade-5)"
                : "var(--nighttime-shade-1)",
              transition: "var(--transition)",
            }}
          >
            {category?.name}
          </h2>
          <p
            style={{
              color: daytime
                ? "var(--daytime-shade-5)"
                : "var(--nighttime-shade-1)",
              transition: "var(--transition)",
            }}
          >
            {category?.description}
          </p>
          <div className={"uk-child-width-1-4@s"} uk-grid={""}>
            {posts?.map((post, key) => {
              let source_url = "";
              if (post?._embedded["wp:featuredmedia"]) {
                source_url = post?._embedded["wp:featuredmedia"][0]?.source_url;
              }
              return (
                <div key={key}>
                  <div className={"uk-height-medium uk-cover-container"}>
                    {source_url && (
                      <img
                        src={source_url}
                        alt={post?.title.rendered + " | The Pixel Shop"}
                        uk-cover={""}
                      />
                    )}
                  </div>
                  <h3
                    className={"uk-margin-remove-bottom"}
                    style={{
                      color: daytime
                        ? "var(--daytime-shade-5)"
                        : "var(--nighttime-shade-1)",
                      transition: "var(--transition)",
                    }}
                  >
                    {post?.title.rendered}
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post?.content.rendered,
                    }}
                    style={{
                      color: daytime
                        ? "var(--daytime-shade-5)"
                        : "var(--nighttime-shade-1)",
                      transition: "var(--transition)",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
