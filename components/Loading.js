export default function Loading({ loading }) {
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
          className={"uk-section-primary uk-flex uk-flex-center uk-flex-middle"}
          uk-height-viewport={""}
        >
          <div uk-spinner={""} />
        </div>
      </div>
    </>
  );
}
