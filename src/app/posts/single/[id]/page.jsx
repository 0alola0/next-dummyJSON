import axios from "axios";

const getSinglePost = async (id) => {
  const response = await axios.get(`https://dummyjson.com/posts/${id}`);
  return response.data;
};
const getSinglePostComments = async (id) => {
  const response = await axios.get(
    `https://dummyjson.com/posts/${id}/comments`
  );
  return response.data;
};

export default async function SinglePost({ params }) {
  const [post, comments] = await Promise.all([getSinglePost(params.id), getSinglePostComments(params.id)] )
  console.log(comments)
  return (
    <div>
      {post.id},
      {comments.total}
    </div>
  );
}
