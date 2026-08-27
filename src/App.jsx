import { useState } from "react";
import { pads } from "./assets/scripts/pads.js";
import Pads from "./components/Pads.jsx";

function App() {
  const [padsBtn, setPadsBtn] = useState(pads);
  function toggle(id) {
    setPadsBtn((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      }),
    );
  }

  const buttons = padsBtn.map((btn) => {
    return (
      <Pads
        color={btn.color}
        key={btn.id}
        toggle={toggle}
        id={btn.id}
        on={btn.on}
      />
    );
  });
  return (
    <main>
      <div className="pad-container">{buttons}</div>
    </main>
  );
}

export default App;
