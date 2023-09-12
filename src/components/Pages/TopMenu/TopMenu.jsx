import React, { useEffect, useState } from "react";
import { getDate } from "../../../utils/utils";
import sprite from "../../../icons.svg";

export const TopMenu = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = getDate(date);

  return (
    <div style={{ textTransform: "capitalize" }}>
      <div>{formattedDate.weekDay}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10 + "px",
        }}
      >
        <div>
          {formattedDate.day +
            " " +
            formattedDate.mounth +
            ", " +
            formattedDate.year}
        </div>
        <svg width={16 + "px"} height={16 + "px"} fill="rgb(139,195,74)">
          <use href={sprite + "#clock"} />
        </svg>
        <div>
          {date.toLocaleTimeString("en-US", {
            hour12: false,
            timeStyle: "short",
          })}
        </div>
      </div>
    </div>
  );
};
