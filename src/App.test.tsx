import type { User } from "./UserList";
import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";
import { getUserList } from "./apis/user";

jest.mock("./apis/user");

describe("App", () => {
  test("render App", async () => {
    const mockGetUserApi = getUserList as jest.Mock<Promise<Array<User>>>;

    mockGetUserApi.mockImplementation(() => {
      return Promise.resolve([
        { id: 1, name: "kim", age: 24, gender: "male" },
        { id: 2, name: "lee", age: 22, gender: "female" },
        { id: 3, name: "park", age: 34, gender: "male" },
        { id: 4, name: "choi", age: 28, gender: "female" },
      ]);
    });

    render(<App />);

    const listItem = await screen.findAllByRole("listitem");
    await waitFor(() => {
      expect(listItem).toHaveLength(4);
    });
  });
});
