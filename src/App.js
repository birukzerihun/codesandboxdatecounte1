import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  function addCount() {
    setCount((c) => c + step);
  }
  function subCount() {
    setCount((c) => c - step);
  }
  function addStep() {
    setStep((s) => s + 1);
  }
  function subStep() {
    setStep((s) => s - 1);
  }
  return (
    <>
      <div>
        <button onClick={subStep} style={{ marginRight: "5px" }}>
          -
        </button>
        Step: {step}
        <button onClick={addStep} style={{ marginLeft: "5px" }}>
          +
        </button>
      </div>
      <div>
        <button onClick={subCount} style={{ marginRight: "5px" }}>
          -
        </button>
        Counter: {count}
        <button onClick={addCount} style={{ marginLeft: "5px" }}>
          +
        </button>
      </div>
      <p>{count}</p>
    </>
  );
}
