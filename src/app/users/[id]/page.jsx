import axios from "axios";

const getSingleUser = async (id) => {
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    return response.data;
};


export default async function SingleUser({params}) {
  const user = await getSingleUser(params.id)
  console.log(user)

  return (
    <div>
        <h1>this is me {user.firstName}</h1>
    </div>
  );
}
