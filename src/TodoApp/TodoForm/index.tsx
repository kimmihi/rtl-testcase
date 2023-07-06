import { ChangeEvent, FormEvent, useState } from "react";

interface ITodoForm {
  onSubmit: (text: string) => void;
}

const TodoForm = ({ onSubmit }: ITodoForm) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo-input">Todo:</label>
      <input id="todo-input" value={todo} onChange={handleChange} />
      <button type="submit">저장</button>
    </form>
  );
};

export default TodoForm;
