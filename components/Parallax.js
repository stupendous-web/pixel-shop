import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ParallaxLayer from "./ParallaxLayer";

const images = [
  [
    "/images/parallax/daytime/8-clouds.png",
    "/images/parallax/nighttime/8-clouds.png",
  ],
  [
    "/images/parallax/daytime/7-bakcground.png",
    "/images/parallax/nighttime/7-background.png",
  ],
  [
    "/images/parallax/daytime/6-middleground.png",
    "/images/parallax/nighttime/6-middleground.png",
  ],
  [
    "/images/parallax/daytime/5-yard.png",
    "/images/parallax/nighttime/5-yard.png",
  ],
  [
    "/images/parallax/daytime/4-foreground.png",
    "/images/parallax/nighttime/4-foreground.png",
  ],
  [
    "/images/parallax/daytime/3-mill.png",
    "/images/parallax/nighttime/3-mill.png",
  ],
  [
    "/images/parallax/daytime/2-sign.png",
    "/images/parallax/nighttime/2-sign.png",
  ],
  [
    "/images/parallax/daytime/1-plants.png",
    "/images/parallax/nighttime/1-plants.png",
  ],
];

export default function Parallax() {
  const daytime = useSelector((state) => state.daytime);
  let width;
  let height;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
    height = window.innerHeight;
  } else {
    width = 0;
    height = 0;
  }
  const [clientX, setClientX] = useState(width / 2);
  const [clientY, setClientY] = useState(height / 2);
  useEffect(() => {
    const changePerspective = (event) => {
      setClientX(event.clientX);
      setClientY(event.clientY);
    };
    window.addEventListener("mousemove", (event) => changePerspective(event));
    return () =>
      window.removeEventListener("mousemove", (event) =>
        changePerspective(event)
      );
  }, []);

  return (
    <>
      <div
        className={"uk-width-1-1 uk-inline uk-overflow-hidden"}
        style={{
          backgroundColor: daytime
            ? "var(--silver-fern)"
            : "var(--camping-trip)",
        }}
      >
        <div className={"uk-background-cover"} style={{ height: "80vh" }} />
        {images.map((image, key) => {
          return (
            <ParallaxLayer
              key={key}
              image={daytime ? image[0] : image[1]}
              x={((clientX - width / 2) * (key + 1)) / 200}
              y={((clientY - height / 2) * (key + 1)) / 200}
            />
          );
        })}
      </div>
    </>
  );
}
