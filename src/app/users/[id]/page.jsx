import axios from "axios";
import { PostCard } from "@/app/components";
//პაგინაციის გვერდისგან განსხვავებით აქ ორი fetch ერთმანეთზე დამოკიდებული არაა და ამიტომ შიგნითვე ვიძახებ ერთდრაულად
const getSingleUser = async (id) => {
  const response = await axios.get(`https://dummyjson.com/users/${id}`);
  return response.data;
};
const getPostsByUser = async (id) => {
  const response = await axios.get(`https://dummyjson.com/users/${id}/posts`);
  return response.data;
};

export default async function SingleUser({ params }) {
  const [user, posts] = await Promise.all([
    getSingleUser(params.id),
    getPostsByUser(params.id),
  ]);

  return (
    <div className="user_page">
      <div className="userHeader">
        <figure>
          <img src="/next.svg" alt="" />
        </figure>
        <span>
          {user.firstName} {user.lastName}
        </span>
      </div>
      <div className="container">
        {posts.posts.map((post) => (
          <div key={post.id}>
            <PostCard post={post} user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}
