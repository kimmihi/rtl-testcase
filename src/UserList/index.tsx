export type User = {
  id: number;
  name: string;
  age: number;
  gender: "male" | "female";
};

interface Props {
  userList: Array<User>;
}

const UserList = ({ userList }: Props) => {
  return (
    <section>
      <h2>User List</h2>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            {user.name}/{user.age}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserList;
