import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const incre = () => {
    if (count == 20) {
      return;
    } else {
      count++;
      setCount(count);
    }
  };
  const decre = () => {
    if (count == 0) {
      return;
    } else {
      count--;
      setCount(count);
    }
  };

  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={incre}>incre</button>
      <br />
      <button onClick={decre}>decre</button>
    </>
  );
}

export default App;
