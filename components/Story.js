import { useSelector } from "react-redux";

export default function Story() {
  const daytime = useSelector((state) => state.daytime);

  return (
    <>
      <div
        className={"uk-section"}
        style={{
          backgroundColor: daytime
            ? "var(--silver-fern)"
            : "var(--metropolitan-silhouette)",
          transition: "var(--transition)",
        }}
        id={"Story"}
      >
        <div className={"uk-container"}>
          <div className={daytime ? undefined : "uk-light"}>
            <h2 style={{ transition: "var(--transition)" }}>Story</h2>
            <p style={{ transition: "var(--transition)" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus accusantium atque, aut blanditiis corporis deserunt
              dolores eos esse explicabo mollitia nobis omnis pariatur
              praesentium provident quas qui rerum temporibus veniam!
            </p>
            <p style={{ transition: "var(--transition)" }}>
              Blanditiis consectetur culpa cumque labore quas recusandae
              temporibus voluptatum. A accusamus aut expedita hic illum iusto,
              labore maiores minus molestias, quae velit!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
