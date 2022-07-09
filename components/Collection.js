import { useSelector } from "react-redux";

export default function Collection() {
  const daytime = useSelector((state) => state.daytime);
  const profiles = [
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Masumi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Masumi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Masumi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Masumi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Masumi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Masumi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Masumi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Masumi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Masumi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Masumi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Masumi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Masumi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
  ];

  return (
    <>
      <div
        className={"uk-section"}
        style={{
          backgroundColor: daytime
            ? "var(--daytime-shade-1)"
            : "var(--nighttime-shade-1)",
          transition: "var(--transition)",
        }}
        id={"Collection"}
      >
        <div className={"uk-container"}>
          <div className={daytime ? undefined : "uk-light"}>
            <h2 style={{ transition: "var(--transition)" }}>Collection</h2>
            <p style={{ transition: "var(--transition)" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className={"uk-child-width-1-6@s"} uk-grid={""}>
              {profiles.map((profile, key) => {
                return (
                  <div key={key}>
                    <div className={"uk-height-medium uk-cover-container"}>
                      <img
                        src={profile.image}
                        alt={profile.name + " | The Pixel Shop"}
                        uk-cover={""}
                      />
                    </div>
                    <h3 style={{ transition: "var(--transition)" }}>
                      {profile.name}
                    </h3>
                    <p style={{ transition: "var(--transition)" }}>
                      {profile.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
