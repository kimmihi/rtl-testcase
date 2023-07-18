import type { User } from "./UserList";
import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";
import delay from "./utils/delay";
import { getUserList } from "./apis/user";

jest.mock("./apis/user");

describe("App", () => {
  test("render", () => {
    render(<App />);
  });
});
