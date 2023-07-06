interface Props {
  todoList: Array<Todo>;
}

type Todo = { id: number; content: string; complete: boolean };

const TodoList = ({ todoList }: Props) => {
  return (
    <ul>
      {todoList.map(
        (todo) =>
          todo.complete === false && <li key={todo.id}>{todo.content}</li>
      )}
    </ul>
  );
};

export default TodoList;
