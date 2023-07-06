import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SignUpForm from ".";

/**
 * 올바른 matcher를 사용하는 것이 중요.
 *
 * 첫 번째 테스트는 잘못된 이메일을 입력했을 때 에러 메시지가 출력되는지를 테스트하기 때문에
 * toHaveErrorMessage를 사용하였다.
 *
 * 두 번째 테스트는 올바른 이메일을 입력했을 때 정상적으로 제출되었는지 테스트하기 때문에
 * toBeValid를 사용하였다.
 *
 * 물론 첫 번째 테스트에서 toBeValid를 사용할 수도 있지만 의미상으로 toHaveErrorMessage가 맞는 것 같다.
 */

describe("SignUpForm Test", () => {
  const user = userEvent.setup();
  test("유효하지 않은 이메일을 입력하면 에러 메시지가 출력된다.", async () => {
    render(<SignUpForm />);

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const submitBtn = screen.getByRole("button", { name: /Sign Up/ });

    await user.type(emailInput, "abcdefg");
    await user.click(submitBtn);

    expect(emailInput).toHaveErrorMessage("이메일 형식에 맞춰서 작성해주세요.");
  });

  test("올바른 이메일을 입력했을 때 정상적으로 제출된다.", async () => {
    render(<SignUpForm />);

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const submitBtn = screen.getByRole("button", { name: /Sign Up/ });

    await user.type(emailInput, "apple@gmail.com");
    await user.click(submitBtn);

    expect(emailInput).toBeValid();
  });
});
