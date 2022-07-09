import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function FAQ() {
  const daytime = useSelector((state) => state.daytime);

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
        className={"uk-section"}
        style={{
          backgroundColor: daytime
            ? "var(--daytime-shade-5)"
            : "var(--nighttime-shade-5)",
          transition: "var(--transition)",
        }}
        id={"FAQ"}
      >
        <div className={"uk-container"}>
          <div className={daytime ? undefined : "uk-light"}>
            <h2 style={{ transition: "var(--transition)" }}>FAQ</h2>
            <ul
              className={"uk-subnav uk-subnav-pill"}
              uk-switcher={"animation: uk-animation-fade"}
            >
              {posts?.map((post, key) => {
                return (
                  <li key={key}>
                    <a href={"#"} className={"uk-light"}>
                      {post?.title.rendered}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className={"uk-switcher"}>
              {posts?.map((post, key) => {
                return (
                  <li
                    key={key}
                    dangerouslySetInnerHTML={{
                      __html: post?.content.rendered,
                    }}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
