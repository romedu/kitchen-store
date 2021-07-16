import { useState } from "react";

const useClearableState = (initialState = null, clearedValue = null) => {
  const [state, setState] = useState(initialState);
  const clearState = () => setState(clearedValue);

  return [state, setState, clearState];
};

export default useClearableState;
