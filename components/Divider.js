import { useTime } from "../lib/context";

export default function Divider({
  divider,
  daytimeBackgroundColor,
  nighttimeBackgroundColor,
}) {
  const { daytime } = useTime();
  const daytimeDividers = [
    "/images/dividers/daytime-divider-1.png",
    "/images/dividers/daytime-divider-2.png",
    "/images/dividers/daytime-divider-3.png",
    "/images/dividers/daytime-divider-4.png",
    "/images/dividers/daytime-divider-5.png",
  ];
  const nighttimeDividers = [
    "/images/dividers/nighttime-divider-1.png",
    "/images/dividers/nighttime-divider-2.png",
    "/images/dividers/nighttime-divider-3.png",
    "/images/dividers/nighttime-divider-4.png",
    "/images/dividers/nighttime-divider-5.png",
  ];
  const backgroundColor = daytime
    ? daytimeBackgroundColor
    : nighttimeBackgroundColor;
  const backgroundImage = daytime
    ? daytimeDividers[divider]
    : nighttimeDividers[divider];

  return (
    <>
      <div
        style={{
          backgroundColor: backgroundColor,
          height: "100px",
          backgroundImage: "url(" + backgroundImage + ")",
          backgroundPositionX: "50%",
          backgroundPositionY: "100%",
          backgroundRepeat: "repeat",
          transition: "var(--transition)",
        }}
      />
    </>
  );
}
