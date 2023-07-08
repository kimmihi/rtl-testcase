import type { User } from "./UserList";
import { useState, useEffect } from "react";
import "./App.css";

import { getUserList } from "./apis/user";

import UserList from "./UserList";
function App() {
  const [userList, setUserList] = useState<Array<User>>([]);

  const loadUserList = async () => {
    const response = await getUserList();
    setUserList(response);
  };

  useEffect(() => {
    loadUserList();
  }, []);
  return (
    <div className="App">
      <UserList userList={userList} />
    </div>
  );
}

export default App;
