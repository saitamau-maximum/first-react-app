import { useState } from "react";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "掃除", done: false },
    { id: 2, title: "洗濯", done: false },
    { id: 3, title: "買い物", done: false },
  ]);

  function handleChange(event) {
    setTodoInput(event.target.value);
  }

  function handleClick() {
    const newTodos = [...todos, { id: new Date().getTime(), title: todoInput }];
    setTodos(newTodos);
    setTodoInput("");
  }

  function handleDelete(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function handleDone(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        // idが一致するtodoのdoneを反転させる
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function handleSort() {
    const newTodos = [...todos].sort((a, b) => {
      if (a.done === b.done) {
        return 0;
      }
      if (a.done) {
        return 1;
      }
      return -1;
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <input type="text" value={todoInput} onChange={handleChange} />
      <button onClick={handleClick}>追加</button>
      <button onClick={handleSort}>未完了を上に</button>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.title}
          <button onClick={() => handleDone(todo.id)}>
            {todo.done ? "X" : "O"}
          </button>
          <button onClick={() => handleDelete(todo.id)}>削除</button>
        </p>
      ))}
    </div>
  );
}

export default App;
