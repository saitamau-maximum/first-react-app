import { useState } from "react";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState(["掃除", "洗濯", "買い物"]);

  function handleChange(event) {
    setTodoInput(event.target.value);
  }

  return (
    <div>
      <input type="text" value={todoInput} onChange={handleChange} />
      {todos.map((todo, i) => <p key={i}>{todo}</p>)}
    </div>
  );
}

export default App;
