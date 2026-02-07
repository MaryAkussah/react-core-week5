import { useCallback, useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return <Child onClick={increment} />;
}

function Child({ onClick }: { onClick: () => void }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
}

export default Parent;
