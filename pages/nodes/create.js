import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

export default function Create() {
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [image, setImage] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("type", type);
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", image);
    axios
      .post({
        url: "https://api.thepixelshop.app/nodes",
        formData,
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-xsmall"}>
          <h1>Create Node</h1>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className={"uk-margin"}>
              <label className={"uk-form-label"}>Type</label>
              <select
                value={type}
                className={"uk-select"}
                onChange={(event) => setType(event.target.value)}
                required
              >
                <option value={""}>Please select</option>
                <option value={"member"}>Member</option>
                <option value={"faq"}>FAQ</option>
              </select>
            </div>
            <div className={"uk-margin"}>
              <label className={"uk-form-label"}>Title</label>
              <input
                type={"text"}
                value={title}
                className={"uk-input"}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <Editor
              tinymceScriptSrc={"/tinymce/tinymce.min.js"}
              init={{
                menubar: "",
                toolbar:
                  "undo redo | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | removeformat",
                plugins: ["wordcount", "lists"],
              }}
              onEditorChange={setBody}
            />
            <div className={"uk-margin"}>
              <label className={"uk-form-label"}>Featured Image</label>
              <div>
                <div uk-form-custom={""}>
                  <input
                    type={"file"}
                    accept={"image/*"}
                    onChange={(event) => setImage(event.target.files[0])}
                  />
                  <button
                    className={"uk-button uk-button-default"}
                    tabIndex={"-1"}
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
            <input
              type={"submit"}
              value={"Publish Node"}
              className={"uk-button uk-button-primary"}
            />
          </form>
        </div>
      </div>
    </>
  );
}
