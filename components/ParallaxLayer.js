export default function ParallaxLayer({ image, x, y }) {
  return (
    <>
      <div
        className={"uk-background-cover uk-position-top parallax-layer"}
        style={{
          backgroundImage: "url(" + image + ")",
          transform: "translate(" + x + "px, " + y + "px) scale(1.1)",
        }}
      />
    </>
  );
}
