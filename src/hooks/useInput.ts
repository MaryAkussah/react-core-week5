import { useState } from "react";

function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function reset() {
    setValue(initialValue);
  }

  return {
    value,
    onChange,
    reset,
  };
}

export default useInput;
