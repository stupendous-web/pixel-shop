import { useSelector } from "react-redux";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const daytime = useSelector((state) => state.daytime);

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
            <div className={"uk-text-small"}>
              &copy; Copyright{" "}
              <a href={"/"} title={"The Pixel Shop"}>
                The Pixel Shop
              </a>{" "}
              {moment().format("Y")}.{" "}
              <a
                href={"https://twitter.com/realpixelshop"}
                title={"The Pixel Shop"}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>{" "}
              <a
                href={"https://discord.gg/thepixelshop"}
                title={"The Pixel Shop"}
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>{" "}
              <a href={"mailto:sumiez@thepixelshop.app"}>
                sumiez@thepixelshop.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
