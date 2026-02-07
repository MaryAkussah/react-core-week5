import { useMemo, useState } from "react";

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const double = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <div style={{ background: dark ? "#222" : "#fff" }}>
      <p>Double: {double}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default ExpensiveCalculation;
