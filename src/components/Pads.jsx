import { useState } from "react";

export default function Pads({ btn }) {
  const [isOn, setIsOn] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setIsOn((prev) => !prev);
  }
  return (
    <button
      style={{ background: btn.color }}
      className={isOn ? "on" : ""}
      onClick={handleClick}
    ></button>
  );
}
