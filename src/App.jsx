import { useState } from "react";
import ButtonGradient from "../src/assets/svg/ButtonGradient";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ButtonGradient />
    </>
  );
}

export default App;
