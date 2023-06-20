import axios from 'axios';
import Link from 'next/link';

const getUsers = async () => {
    const response = await axios.get('https://dummyjson.com/users', 
    //ჰედერი ქეშის გასატესტად {headers: { 'Cache-Control': 'no-store' }}
    );
    return response.data;
};

export default async function AllUsers() {
  const users = await getUsers();
  return (
    <div>
      {users.users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}><h1>{user.firstName}</h1></Link>
      ))}
    </div>
  );
}