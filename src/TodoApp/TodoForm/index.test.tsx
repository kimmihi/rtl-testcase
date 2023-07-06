import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from ".";

describe("TodoForm Test", () => {
  const user = userEvent.setup();
  test("저장버튼을 클릭하면 input의 값이 빈 문자열이 된다.", async () => {
    const handleSubmit = jest.fn();
    render(<TodoForm onSubmit={handleSubmit} />);

    const input = screen.getByRole("textbox", { name: /todo/i });
    const saveBtn = screen.getByRole("button", { name: /저장/ });

    await user.type(input, "청소하기");
    await user.click(saveBtn);

    expect(input).not.toHaveValue();
  });
});
