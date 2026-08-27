import { useState } from "react";

export default function Pads({ color, on, toggle, id }) {
  return (
    <button
      style={{ background: color }}
      className={on ? "on" : ""}
      onClick={() => toggle(id)}
    ></button>
  );
}
