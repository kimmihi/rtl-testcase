import type { User } from "../UserList";
import axios from "axios";

export const getUserList = async (): Promise<Array<User>> => {
  const response = await axios.get("/users");
  return response.data;
};
