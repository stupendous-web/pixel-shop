import { useSelector } from "react-redux";

export default function Team() {
  const daytime = useSelector((state) => state.daytime);
  const profiles = [
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Masumi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Topher",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Millie",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      image: "https://www.fillmurray.com/350/400",
      name: "Millie",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
  ];

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
        id={"Team"}
      >
        <div className={"uk-container"}>
          <div className={daytime ? undefined : "uk-light"}>
            <h2 style={{ transition: "var(--transition)" }}>Team</h2>
            <p style={{ transition: "var(--transition)" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className={"uk-child-width-1-4@s"} uk-grid={""}>
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
