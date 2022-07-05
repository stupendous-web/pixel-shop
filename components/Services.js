import { useSelector } from "react-redux";

export default function Services() {
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
        id={"Services"}
      >
        <div className={"uk-container"}>
          <div className={daytime ? undefined : "uk-light"}>
            <h2 style={{ transition: "var(--transition)" }}>Services</h2>
            <p style={{ transition: "var(--transition)" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
