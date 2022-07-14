import { useTime } from "../lib/context";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const { daytime } = useTime();

  return (
    <>
      <div
        className={"uk-section uk-section-xsmall"}
        style={{
          backgroundColor: daytime
            ? "var(--daytime-shade-2)"
            : "var(--nighttime-shade-2)",
          transition: "var(--transition)",
        }}
      >
        <div className={"uk-container"}>
          <div className={daytime ? undefined : "uk-light"}>
            <div className={"uk-text-small"}>
              <span style={{ transition: "var(--transition)" }}>
                &copy; Copyright
              </span>{" "}
              <a href={"/"} title={"The Pixel Shop"}>
                The Pixel Shop
              </a>{" "}
              <span style={{ transition: "var(--transition)" }}>
                {moment().format("Y")}.
              </span>{" "}
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
              <a href={"mailto:contact@thepixelshop.app"}>
                contact@thepixelshop.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
