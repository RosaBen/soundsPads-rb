import { useState } from "react";
import { pads } from "./assets/scripts/pads.js";

function App() {
  const [padsBtn, setPadsBtn] = useState(pads);
  const buttons = padsBtn.map((btn, index) => {
    return <button key={btn.color} style={{ background: btn.color }}></button>;
  });
  return (
    <main>
      <div className="pad-container">{buttons}</div>
    </main>
  );
}

export default App;
