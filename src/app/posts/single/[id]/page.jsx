import { CommentCard, PostShowcase } from "@/app/components";
import axios from "axios";

const getSinglePost = async (id) => {
  const response = await axios.get(`https://dummyjson.com/posts/${id}`);
  const usersData = await getUsersData(response.data.userId);
  response.data.userData = usersData;
  return response.data;
};
const getSinglePostComments = async (id) => {
  const response = await axios.get(
    `https://dummyjson.com/comments/post/${id}`
  );
  return response.data;
};
const getUsersData = async (id) => {
  const response = await axios.get(`https://dummyjson.com/users/${id}`);
  return response.data;
};

export default async function SinglePost({ params }) {
  const [post, comments] = await Promise.all([getSinglePost(params.id), getSinglePostComments(params.id)] )
  return (
    <div>
      {comments.total}
      <PostShowcase post={post}/>
      {comments.comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment}/>
      ))}
    </div>
  );
}
