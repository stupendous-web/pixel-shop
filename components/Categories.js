import { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://cms.thepixelshop.app/wp-json/wp/v2/categories")
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  return (
    <>
      <div className={"uk-section"}>
        <div className={"uk-container"}></div>
      </div>
    </>
  );
}
