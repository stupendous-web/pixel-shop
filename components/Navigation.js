import { useSelector } from "react-redux";
import { setHour, setDaytime } from "../redux/actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import UIkit from "uikit";

export default function Navigation() {
  const daytime = useSelector((state) => state.daytime);
  const dispatch = useDispatch();

  const links = ["Story", "Collection", "Services", "Team", "FAQ", "Contact"];

  const handleClick = () => {
    dispatch(setDaytime(!daytime));
    if (daytime) {
      dispatch(setHour(23));
    } else {
      dispatch(setHour(0));
    }
  };

  return (
    <>
      <div
        className={"uk-position-fixed uk-padding uk-link"}
        style={{ top: 0, right: 0 }}
      >
        <FontAwesomeIcon icon={faMoon} />
        <label className={"uk-margin-small-right uk-margin-small-left switch"}>
          <input
            type={"checkbox"}
            checked={daytime}
            onChange={() => handleClick()}
          />
          <span className={"slider"} />
        </label>
        <FontAwesomeIcon icon={faSun} />
        <span
          className={
            daytime
              ? "uk-button uk-button-primary"
              : "uk-button uk-button-primary"
          }
          style={{ transition: "var(--transition)" }}
          onClick={() => handleClick()}
        ></span>
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
          src={"/images/pillar.png"}
          alt={"The Pixel Shop"}
          className={"uk-position-fixed uk-visible@s uk-padding"}
          style={{ top: 0, left: 0 }}
        />
      </a>
      <img
        src={"/images/logo-369.png"}
        alt={"The Pixel Shop"}
        className={"uk-position-top-center"}
        style={{ marginTop: "63px" }}
      />
    </>
  );
}
