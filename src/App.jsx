import { useState } from "react";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "掃除" },
    { id: 2, title: "洗濯" },
    { id: 3, title: "買い物" },
  ]);

  function handleChange(event) {
    setTodoInput(event.target.value);
  }

  function handleClick() {
    const newTodos = [...todos, { id: new Date().getTime(), title: todoInput }];
    setTodos(newTodos);
    setTodoInput("");
  }

  return (
    <div>
      <input type="text" value={todoInput} onChange={handleChange} />
      <button onClick={handleClick}>追加</button>
      {todos.map((todo) => (
        <p key={todo.id}>{todo}</p>
      ))}
    </div>
  );
}

export default App;
