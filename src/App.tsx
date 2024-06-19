import Case1 from "./Case1";
import Case2 from "./Case2";
import Case3 from "./Case3";

function App() {
  console.log("root rendered");

  const formAction = async (formData: FormData) => {
    const todo = formData.get("todo") as string;
    await new Promise((res) => setTimeout(() => res(todo), 2000));
    console.log("form submitted", todo);
  };

  return (
    <form action={formAction}>
      <input name="todo" />
      <button type="submit">button</button>
      {/* Case1 : infinite loop no matter the form is submitting or not */}
      {/* <Case1 /> */}

      {/* Case2 : no infinite loop */}
      {/* <Case2 /> */}

      {/* Case3 : infinite loop when the form has done submitting  */}
      {/* <Case3 /> */}
    </form>
  );
}

export default App;
