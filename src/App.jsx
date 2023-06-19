import { useState } from "react";

function App() {
  const [todoInput, setTodoInput] = useState("");

  function handleChange(event) {
    setTodoInput(event.target.value);
  }

  return (
    <div>
      <input type="text" value={todoInput} onChange={handleChange} />
      <p>{todoInput}</p>
    </div>
  );
}

export default App;
