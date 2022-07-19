import axios from "axios";
import Buffer from "next/dist/server/lib/squoosh/image_data";

export default function handler(request, response) {
  const { collection, token } = request.query;

  axios
    .get("https://api.thepixelshop.app/asdf/asdf", {
      responseType: "arraybuffer",
    })
    .then((response) => {
      Buffer.from(response.data, "binary").toString("base64");
    });

  // response.status(200).json({ collection: collection, token: token });
}
