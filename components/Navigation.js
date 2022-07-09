import { useSelector } from "react-redux";
import { setDaytime } from "../redux/actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import UIkit from "uikit";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Navigation() {
  const daytime = useSelector((state) => state.daytime);
  const dispatch = useDispatch();

  const links = ["Story", "Collection", "Services", "Team", "FAQ", "Contact"];

  return (
    <>
      <ul
        className={"uk-subnav uk-position-fixed uk-visible@s"}
        style={{ top: 0, left: "6rem" }}
      >
        {links.map((link, key) => {
          return (
            <li key={key}>
              <a href={"#" + link} uk-scroll={""}>
                {link}
              </a>
            </li>
          );
        })}
      </ul>

      <div
        className={
          "uk-position-fixed uk-padding uk-link uk-flex uk-flex-middle"
        }
        style={{ top: 0, right: 0 }}
      >
        <a
          href={"https://twitter.com/realpixelshop"}
          title={"The Pixel Shop"}
          className={"uk-margin-small-right"}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href={"https://discord.gg/thepixelshop"}
          title={"The Pixel Shop"}
          className={"uk-margin-small-right"}
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <FontAwesomeIcon icon={faMoon} onClick={() => handleClick(false)} />
        <label className={"uk-margin-small-right uk-margin-small-left switch"}>
          <input
            type={"checkbox"}
            checked={daytime}
            onChange={() => dispatch(setDaytime(!daytime))}
          />
          <span className={"slider"} />
        </label>
        <FontAwesomeIcon icon={faSun} onClick={() => handleClick(true)} />
        <span className={"uk-margin-left uk-hidden@s"}>
          <a href={"#offcanvas-navigation"} uk-toggle={""}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </span>
      </div>
      <div
        id={"offcanvas-navigation"}
        uk-offcanvas={"overlay: true; flip: true"}
      >
        <div
          className={"uk-offcanvas-bar"}
          style={{
            background: daytime
              ? "var(--daytime-shade-1)"
              : "var(--nighttime-shade=-2)",
          }}
        >
          <ul className={"uk-nav uk-nav-default"}>
            {links.map((link, key) => {
              return (
                <li key={key}>
                  <a
                    href={"#" + link}
                    title={link}
                    uk-scroll={""}
                    onClick={() => {
                      UIkit.offcanvas("#offcanvas-navigation").hide();
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
          src={"/images/pillar-108.png"}
          alt={"The Pixel Shop"}
          className={"uk-position-fixed uk-visible@s uk-padding"}
          style={{ width: "6rem", top: 0, left: 0 }}
        />
      </a>
      <img
        src={daytime ? "/images/logo.svg" : "/images/logo-inverse.svg"}
        alt={"The Pixel Shop"}
        className={"uk-position-top-center logo"}
      />
    </>
  );
}
