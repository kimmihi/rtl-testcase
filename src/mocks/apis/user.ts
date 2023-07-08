import { rest } from "msw";

export const getUserList = rest.get("/users", (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      { id: 1, name: "kim", age: 24, gender: "male" },
      { id: 2, name: "lee", age: 22, gender: "female" },
      { id: 3, name: "park", age: 34, gender: "male" },
      { id: 4, name: "choi", age: 28, gender: "female" },
    ])
  );
});
