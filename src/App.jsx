import { useState } from "react";
import { pads } from "./assets/scripts/pads.js";
import Pads from "./components/Pads.jsx";

function App() {
  const [padsBtn, setPadsBtn] = useState(pads);
  const buttons = padsBtn.map((btn) => <Pads btn={btn} key={btn.color} />);
  return (
    <main>
      <div className="pad-container">{buttons}</div>
    </main>
  );
}

export default App;
