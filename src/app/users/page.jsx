import axios from 'axios';

const getUsers = async () => {
    const response = await axios.get('https://dummyjson.com/users', 
    //ჰედერი ქეშის გასატესტად {headers: { 'Cache-Control': 'no-store' }}
    );
    return response.data;
};

export default async function AllUsers() {
  const users = await getUsers();
  console.log(users.users)
  if (!users) {
    return <div>user does not exist</div>;
  }

  return (
    <div>
      {users.users.map((user) => (
        <h1 key={user.id}>{user.firstName}</h1>
      ))}
    </div>
  );
}