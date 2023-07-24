import { useState } from "react";

import withAuthorization from "../hoc/withAuthorization";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
};

export default withAuthorization(Counter);
