import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Team() {
  const daytime = useSelector((state) => state.daytime);

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
            ? "var(--silver-fern)"
            : "var(--metropolitan-silhouette)",
          transition: "var(--transition)",
        }}
        id={"Team"}
      >
        <div className={"uk-container"}>
          <div className={daytime ? undefined : "uk-light"}>
            <h2 style={{ transition: "var(--transition)" }}>
              {category?.name}
            </h2>
            <p style={{ transition: "var(--transition)" }}>
              {category?.description}
            </p>
            <div className={"uk-child-width-1-4@s"} uk-grid={""}>
              {posts?.map((post, key) => {
                let source_url = "";
                if (post?._embedded["wp:featuredmedia"]) {
                  source_url =
                    post?._embedded["wp:featuredmedia"][0]?.source_url;
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
                    <h3 style={{ transition: "var(--transition)" }}>
                      {post?.title.rendered}
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post?.content.rendered,
                      }}
                      style={{ transition: "var(--transition)" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
