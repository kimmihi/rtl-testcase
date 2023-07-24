import type { FC } from "react";
import { render, screen } from "@testing-library/react";

import Counter from ".";

jest.mock("../hoc/withAuthorization", () => {
  return (Component: FC<any>) => {
    return (props: any) => <Component {...props} />;
  };
});

describe("Counter with HoC Test", () => {
  test("renders", () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: "+" });
    expect(button).toBeInTheDocument();
  });
});
