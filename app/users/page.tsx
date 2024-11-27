interface User {
  id: number;
  name: string;
}

export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <div className="">
      <h1 className="font-bold text-xl">Users</h1>

      {users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}
