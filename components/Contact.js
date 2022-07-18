import { useState } from "react";
import { useTime } from "../lib/context";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const { daytime } = useTime();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/send", {
        name: name,
        email: email,
        twitter: twitter,
        discord: discord,
        message: message,
      })
      .then((response) => {
        setName("");
        setEmail("");
        setTwitter("");
        setDiscord("");
        setMessage("");
        setResponse(
          <div className={"uk-alert-success"} data-uk-alert={""}>
            <p>{response.data}</p>
          </div>
        );
      })
      .catch((error) => {
        setResponse(
          <div className={"uk-alert-danger"} data-uk-alert={""}>
            <p>Oops! There was a problem.</p>
          </div>
        );
        console.log(error);
      });
  };

  return (
    <>
      <div
        className={"uk-section uk-section-large"}
        style={{
          backgroundColor: daytime
            ? "var(--daytime-shade-1)"
            : "var(--nighttime-shade-2)",
          transition: "var(--transition)",
        }}
        id={"Contact"}
      >
        <div className={"uk-container"}>
          <h2
            style={{
              color: daytime
                ? "var(--daytime-shade-5)"
                : "var(--nighttime-shade-5)",
              transition: "var(--transition)",
            }}
          >
            Say, Hi!
          </h2>
          <form
            className={daytime ? undefined : "uk-light"}
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className={"uk-margin"}>
              <div className={"uk-width-1-1 uk-inline"}>
                <div className={"uk-form-icon"}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input
                  type={"text"}
                  className={"uk-input"}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={"Name"}
                />
              </div>
            </div>
            <div className={"uk-margin"}>
              <div className={"uk-width-1-1 uk-inline"}>
                <div className={"uk-form-icon"}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                  type={"email"}
                  className={"uk-input"}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={"Email address"}
                />
              </div>
            </div>
            <div className={"uk-margin"}>
              <div className={"uk-width-1-1 uk-inline"}>
                <div className={"uk-form-icon"}>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <input
                  type={"text"}
                  className={"uk-input"}
                  value={twitter}
                  onChange={(event) => setTwitter(event.target.value)}
                  placeholder={"Twitter"}
                />
              </div>
            </div>
            <div className={"uk-margin"}>
              <div className={"uk-width-1-1 uk-inline"}>
                <div className={"uk-form-icon"}>
                  <FontAwesomeIcon icon={faDiscord} />
                </div>
                <input
                  type={"text"}
                  className={"uk-input"}
                  value={discord}
                  onChange={(event) => setDiscord(event.target.value)}
                  placeholder={"Discord"}
                />
              </div>
            </div>
            <div className={"uk-margin"}>
              <textarea
                className={"uk-textarea"}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={"Tell us more!"}
              />
            </div>
            {response && <div>{response}</div>}
            <input
              type={"submit"}
              value={"Send"}
              className={"uk-button uk-button-primary"}
              style={{ transition: "var(--transition)" }}
            />
          </form>
        </div>
      </div>
    </>
  );
}
