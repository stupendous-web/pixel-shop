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
          <div
            className={"uk-text-small"}
            style={{
              color: daytime
                ? "var(--daytime-shade-1)"
                : "var(--nighttime-shade-1)",
            }}
          >
            <span style={{ transition: "var(--transition)" }}>
              &copy; Copyright
            </span>{" "}
            <a
              href={"/"}
              title={"The Pixel Shop"}
              style={{
                color: daytime ? undefined : "#ffffff",
                transition: "var(--transition)",
              }}
            >
              The Pixel Shop
            </a>{" "}
            <span style={{ transition: "var(--transition)" }}>
              {moment().format("Y")}.
            </span>{" "}
            <a
              href={"https://twitter.com/realpixelshop"}
              title={"The Pixel Shop"}
              style={{
                color: daytime ? undefined : "#ffffff",
                transition: "var(--transition)",
              }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>{" "}
            <a
              href={"https://discord.gg/thepixelshop"}
              title={"The Pixel Shop"}
              style={{
                color: daytime ? undefined : "#ffffff",
                transition: "var(--transition)",
              }}
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>{" "}
            <a
              href={"mailto:contact@thepixelshop.app"}
              style={{
                color: daytime ? undefined : "#ffffff",
                transition: "var(--transition)",
              }}
            >
              contact@thepixelshop.app
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
