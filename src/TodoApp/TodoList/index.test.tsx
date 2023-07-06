import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TodoList from ".";

describe("TodoList Test", () => {
  const user = userEvent.setup();

  test("props로 전달받은 할 일 목록이 출력된다.", () => {
    const todoList = [{ id: 1, content: "청소하기", complete: false }];
    render(<TodoList todoList={todoList} />);

    const list = screen.getAllByRole("listitem");

    expect(list).toHaveLength(todoList.length);
  });

  test("완료된 할 일은 출력되지 않는다.", () => {
    const todoList = [
      { id: 1, content: "청소하기", complete: true },
      { id: 2, content: "공부하기", complete: false },
    ];

    const incompletedTodoList = todoList.filter(
      (todo) => todo.complete === false
    );

    render(<TodoList todoList={todoList} />);

    const list = screen.getAllByRole("listitem");
    expect(list).toHaveLength(incompletedTodoList.length);
  });
});
