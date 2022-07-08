import { useSelector } from "react-redux";

export default function FAQ() {
  const daytime = useSelector((state) => state.daytime);

  return (
    <>
      <div
        className={"uk-section"}
        style={{
          backgroundColor: daytime
            ? "var(--daytime-shade-5)"
            : "var(--nighttime-shade-5)",
          transition: "var(--transition)",
        }}
        id={"FAQ"}
      >
        <div className={"uk-container"}>
          <div className={daytime ? undefined : "uk-light"}>
            <h2 style={{ transition: "var(--transition)" }}>FAQ</h2>
            <ul style={{ transition: "var(--transition)" }}>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>
                Accusamus accusantium atque, aut blanditiis corporis deserunt
                dolores eos esse explicabo mollitia nobis omnis pariatur
                praesentium provident quas qui rerum temporibus veniam!
              </li>
              <li>
                Blanditiis consectetur culpa cumque labore quas recusandae
                temporibus voluptatum.
              </li>
              <li>
                A accusamus aut expedita hic illum iusto, labore maiores minus
                molestias, quae velit!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
