import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";
import * as userApi from "./apis/user";
import { getUserList } from "./apis/user";
import mockAxios from "./utils/mockAxios";

describe("App", () => {
  const mockSpy = jest.spyOn(userApi, "getUserList");

  mockAxios.onGet("/users").reply(200, [
    { id: 1, name: "kim", age: 24, gender: "male" },
    { id: 2, name: "lee", age: 22, gender: "female" },
    { id: 3, name: "park", age: 34, gender: "male" },
    { id: 4, name: "choi", age: 28, gender: "female" },
  ]);

  beforeEach(() => {
    mockSpy.mockClear();
  });

  afterAll(() => {
    mockSpy.mockRestore();
  });

  test("render", async () => {
    render(<App />);

    const listItem = await screen.findByRole("listitem", { name: /kim/i });
    await waitFor(() => {
      expect(listItem).toBeInTheDocument();
    });
  });
});
