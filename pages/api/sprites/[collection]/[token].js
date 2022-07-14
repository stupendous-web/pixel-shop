import axios from "axios";

export default function Sprite(req, res) {
  const { collection, token } = req.query;
  axios
    .get("https://cms.thepixelshop.app/wp-json/wp/v2/media?search=" + token)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    });
}
