import { useEffect, useState } from "react";
import axios from "axios";

export default function Images() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("https://cms.thepixelshop.app/wp-json/wp/v2/media")
      .then((response) => {
        setImages(response.data);
      });
  }, []);
  return (
    <>
      <div className={"uk-section"}>
        <div className={"uk-container"}>
          {images.map((image, key) => {
            return (
              <div key={key}>
                <img src={image.media_details.sizes.full.source_url} />
                <a href={"/images/" + image.slug}>{image.title.rendered}</a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
