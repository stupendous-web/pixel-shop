export default function ParallaxLayer({ image, x, y }) {
  return (
    <>
      <div
        className={"uk-background-cover uk-position-top"}
        style={{
          height: "80vh",
          backgroundImage: "url(" + image + ")",
          transform: "translate(" + x + "px, " + y + "px) scale(1.1)",
        }}
      />
    </>
  );
}
