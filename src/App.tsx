import { useState } from "react";
import StatusComponent from "./components/StatusComponent";

function App() {
  const formAction = async (formData: FormData) => {
    const todo = formData.get("todo") as string;
    await new Promise((res) => setTimeout(() => res(todo), 1000));
  };

  const [value, setValue] = useState("");

  console.log("rendered");

  return (
    <form action={formAction}>
      <input
        style={{ width: "100%" }}
        name="todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit">button</button>
      <StatusComponent />
    </form>
  );
}

export default App;
