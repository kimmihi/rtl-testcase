import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TimePicker from ".";

describe("TimePicker Test", () => {
  const user = userEvent.setup();

  test("Time Picker Input을 클릭하면 시간 설정을 위한 창이 열린다.", async () => {
    render(<TimePicker />);

    const input = screen.getByRole("textbox");

    await user.click(input);

    const hour = await screen.findByText("시간");
    const min = await screen.findByText("분");

    expect(hour).toBeInTheDocument();
    expect(min).toBeInTheDocument();
  });

  test("시간 설정 후에 확인 버튼을 클릭하면 Input창에 설정된 시간이 출력된다.", async () => {
    render(<TimePicker />);

    const input = screen.getByRole("textbox");

    await user.click(input);

    const hour = screen.getByTestId("hour-9");
    const min = screen.getByTestId("min-59");
    const submitBtn = screen.getByRole("button", { name: "확인" });

    await user.click(hour);
    await user.click(min);
    await user.click(submitBtn);

    expect(input).toHaveValue(`09:59`);
  });
});
