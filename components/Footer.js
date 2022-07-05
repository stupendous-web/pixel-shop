import { useSelector } from "react-redux";
import moment from "moment";

export default function Footer() {
  const daytime = useSelector((state) => state.daytime);
  const links = ["Story", "Collection", "Services", "Team", "FAQ", "Contact"];

  return (
    <>
      <div
        className={"uk-section uk-section-xsmall"}
        style={{
          backgroundColor: daytime
            ? "var(--silver-fern)"
            : "var(--metropolitan-silhouette)",
          transition: "var(--transition)",
        }}
      >
        <div className={"uk-container"}>
          <div className={daytime ? undefined : "uk-light"}>
            <div className={"uk-child-width-1-2@s uk-flex-middle"} uk-grid={""}>
              <div>
                <ul className={"uk-list"}>
                  {links.map((link, key) => {
                    return (
                      <li key={key}>
                        <a href={"#" + link} title={link} uk-scroll={""}>
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <p className={"uk-text-large"}>
                  <a href={"mailto:sumiez@thepixelshop.app"}>
                    sumiez@thepixelshop.app
                  </a>
                </p>
                <p
                  className={"uk-text-small"}
                  style={{ transition: "var(--transition)" }}
                >
                  &copy; Copyright{" "}
                  <a href={"/"} title={"The Pixel Shop"}>
                    The Pixel Shop
                  </a>{" "}
                  {moment().format("Y")}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
