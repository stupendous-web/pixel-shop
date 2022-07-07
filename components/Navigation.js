import { useSelector } from "react-redux";
import { setDaytime } from "../redux/actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import UIkit from "uikit";

export default function Navigation() {
  const daytime = useSelector((state) => state.daytime);
  const dispatch = useDispatch();

  const links = ["Story", "Collection", "Services", "Team", "FAQ", "Contact"];

  const handleClick = (time) => {
    dispatch(setDaytime(time));
  };

  return (
    <>
      <div
        className={"uk-position-fixed uk-padding uk-link"}
        style={{ top: 0, right: 0 }}
      >
        <FontAwesomeIcon icon={faMoon} onClick={() => handleClick(false)} />
        <label className={"uk-margin-small-right uk-margin-small-left switch"}>
          <input
            type={"checkbox"}
            checked={daytime}
            onChange={() => handleClick(!daytime)}
          />
          <span className={"slider"} />
        </label>
        <FontAwesomeIcon icon={faSun} onClick={() => handleClick(true)} />
        <span className={"uk-margin-left"}>
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
              ? "var(--silver-fern)"
              : "var(--metropolitan-silhouette)",
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
        src={"/images/logo-288.png"}
        alt={"The Pixel Shop"}
        className={"uk-position-top-center logo"}
      />
    </>
  );
}
