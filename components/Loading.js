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
          className={"uk-flex uk-flex-center uk-flex-middle"}
          style={{
            backgroundColor: daytime
              ? "var(--daytime-shade-2)"
              : "var(--nighttime-shade-2)",
          }}
          data-uk-height-viewport={""}
        >
          <div data-uk-spinner={""} />
        </div>
      </div>
    </>
  );
}
