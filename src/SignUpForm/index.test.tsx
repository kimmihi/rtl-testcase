import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SignUpForm from ".";

describe("SignUpForm Test", () => {
  const user = userEvent.setup();
  test("유효하지 않은 이메일을 입력하면 에러 메시지가 출력된다.", async () => {
    render(<SignUpForm />);

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const submitBtn = screen.getByRole("button", { name: /Sign Up/ });

    await user.click(submitBtn);

    expect(emailInput).toHaveErrorMessage("이메일 형식에 맞춰서 작성해주세요.");
  });
});
