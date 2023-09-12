import React from "react";

export const Select = ({ title, values, handler }) => {
  return (
    <>
      <div style={{ fontSize: 16 + "px" }}>{title}:</div>
      <select
        className="form-select  form-select-md"
        style={{ width: 200 + "px" }}
      >
        {values.map((value) => (
          <option key={title + value} onClick={handler} value={value}>
            {value ? value : "Все"}
          </option>
        ))}
      </select>
    </>
  );
};
