import { useTime } from "../lib/context";

export default function Loading({ loading }) {
  const { daytime } = useTime();
  return (
    <>
      <div
        className={loading ? undefined : "slide-down"}
        style={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          animationDelay: ".5s",
        }}
      >
        <div
          className={"uk-light uk-flex uk-flex-center uk-flex-middle"}
          style={{
            backgroundColor: daytime
              ? "var(--daytime-accent-1)"
              : "var(--daytime-accent-1)",
          }}
          data-uk-height-viewport={""}
        >
          <div className={"uk-text-center"}>
            <img
              src={"/images/loading.gif"}
              alt={"Loading Pixels"}
              className={"uk-width-medium"}
            />
            <p>Loading</p>
          </div>
        </div>
      </div>
    </>
  );
}
