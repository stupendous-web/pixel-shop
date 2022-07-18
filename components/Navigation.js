import { useTime } from "../lib/context";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

export default function Navigation() {
  const { daytime, setDaytime } = useTime();
  useEffect(() => {
    setDaytime(moment().hour() <= 16);
  }, []);

  const links = ["Story", "Services", "Team", "FAQ", "Contact"];

  return (
    <>
      <div
        className={"uk-width-1-1 uk-position-fixed"}
        style={{ top: 0, left: 0, paddingLeft: "108px" }}
      >
        <div
          className={"uk-navbar-container uk-navbar-transparent"}
          data-uk-navbar={""}
        >
          <div className={"uk-navbar-left"}>
            <ul
              className={"uk-navbar-nav uk-visible@m"}
              data-uk-scrollspy-nav={"closest: li; scroll: true"}
            >
              {links.map((link, key) => {
                return (
                  <li key={key}>
                    <a
                      href={"#" + link}
                      className={daytime ? undefined : "nighttime-link"}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={"uk-navbar-right"}>
            <ul className={"uk-navbar-nav"}>
              <li>
                <a
                  href={"https://twitter.com/realpixelshop"}
                  title={"The Pixel Shop"}
                  className={daytime ? undefined : "nighttime-link"}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href={"https://discord.gg/thepixelshop"}
                  title={"The Pixel Shop"}
                  className={daytime ? undefined : "nighttime-link"}
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </li>
              <div className={"uk-navbar-item"}>
                <a
                  className={daytime ? undefined : "nighttime-link"}
                  onClick={() => handleClick(false)}
                >
                  <FontAwesomeIcon icon={faMoon} />
                </a>
                <label
                  className={
                    "uk-margin-small-right uk-margin-small-left switch"
                  }
                >
                  <input
                    type={"checkbox"}
                    checked={daytime}
                    onChange={() => setDaytime(!daytime)}
                  />
                  <span className={"slider"} />
                </label>
                <a
                  className={daytime ? undefined : "nighttime-link"}
                  onClick={() => handleClick(true)}
                >
                  <FontAwesomeIcon icon={faSun} />
                </a>
              </div>
              <div className={"uk-navbar-item uk-hidden@s"}>
                <a href={"#offcanvas-navigation"} data-uk-toggle={""}>
                  <FontAwesomeIcon icon={faBars} />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div
        id={"offcanvas-navigation"}
        data-uk-offcanvas={"overlay: true; flip: true"}
      >
        <div
          className={"uk-offcanvas-bar"}
          style={{
            background: daytime
              ? "var(--daytime-shade-1)"
              : "var(--nighttime-shade-5)",
          }}
        >
          <ul className={"uk-nav uk-nav-default"}>
            {links.map((link, key) => {
              return (
                <li key={key}>
                  <a
                    href={"#" + link}
                    title={link}
                    data-uk-scroll={""}
                    onClick={() => {
                      UIkit.offcanvas("#offcanvas-navigation").hide();
                    }}
                    style={{
                      color: daytime
                        ? "var(--daytime-accent-1)"
                        : "var(--nighttime-accent-2)",
                    }}
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <a href={"/"} title={"The Pixel Shop"}>
        <img
          src={
            daytime
              ? "/images/pillar-108.png"
              : "/images/pillar-inverse-108.png"
          }
          alt={"The Pixel Shop"}
          className={"uk-position-fixed uk-visible@m uk-padding"}
          style={{ width: "6rem", top: 0, left: 0 }}
        />
      </a>
      <img
        src={daytime ? "/images/logo.svg" : "/images/logo-inverse.png"}
        alt={"The Pixel Shop"}
        className={"uk-position-top-center logo"}
      />
    </>
  );
}
