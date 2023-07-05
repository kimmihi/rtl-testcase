import { ChangeEvent, FormEvent, useState } from "react";

import { validateEmail } from "./validator";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateEmail(email) === false) {
      setIsErrorEmail(true);
      return;
    }
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: newEmailValue } = e.target;

    if (validateEmail(newEmailValue)) {
      setIsErrorEmail(false);
    }

    setEmail(newEmailValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={handleChangeEmail}
          aria-invalid={isErrorEmail}
          aria-errormessage="email-helper-text"
        />
        {isErrorEmail && (
          <p id="email-helper-text">이메일 형식에 맞춰서 작성해주세요.</p>
        )}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
