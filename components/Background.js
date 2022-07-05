import background from "../images/background.png";
import { useSelector } from "react-redux";

export default function Background() {
  const temperatures = [
    "rgb(26, 15, 4)",
    "rgb(26, 15, 4)",
    "rgb(26, 15, 4)",
    "rgb(64, 37, 10)",
    "rgb(128, 74, 20)",
    "rgb(191, 111, 31)",
    "rgb(255, 147, 41)",
    "rgb(255, 197, 143)",
    "rgb(255, 214, 170)",
    "rgb(255, 241, 224)",
    "rgb(255, 250, 244)",
    "rgb(255, 255, 251)",
    "rgb(255, 255, 251)",
    "rgb(255, 250, 244)",
    "rgb(255, 241, 224)",
    "rgb(255, 214, 170)",
    "rgb(255, 197, 143)",
    "rgb(255, 147, 41)",
    "rgb(191, 111, 31)",
    "rgb(128, 74, 20)",
    "rgb(64, 37, 10)",
    "rgb(26, 15, 4)",
    "rgb(26, 15, 4)",
    "rgb(26, 15, 4)",
  ];
  const hour = useSelector((state) => state.hour);
  // const opacity = time / 24;

  return (
    <>
      <img src={background} uk-cover={""} />
      <div
        className={"uk-position-cover"}
        style={{
          backgroundColor: temperatures[hour],
          opacity: 0.5,
          transition: "background-color 1s",
        }}
      />
    </>
  );
}
