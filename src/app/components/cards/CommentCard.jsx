"use client";
import useAxiosPost from "@/app/hooks/useAxiosPost";

const CommentCard = ({ comment, newComment }) => {
  const { request: deleteComment, loading: deleteLoading, error: deleteError, response } = useAxiosPost(
    `https://dummyjson.com/comments/${comment.id}`,
    { method: "delete" }
  );

  //delete comments მხოლოდ უკვე არსებულ კომენტარებზე მოქმედებს, ახალი დამატებული კომენტარები სერვერზე არ ემატება და შესაბამისად არც იშლება
  const handleCommentDelete = async () => {
    if (newComment) {
        alert("new comments can not be deleted as they are not yet on the server")
    } else {
        deleteComment();
    }
  };

  return (
    // კომენტარები სერვერიდან არ იშლება, ამიტომ სიმულაციას ვაკეთებ რესპონსის id-ის შედარებით
    <article
      style={response.id === comment.id ? { display: "none" } : {}}
      className="comment_box"
    >
      <div className="upper">
        {comment.user?.username ? comment.user.username : "Anonymous"}{" "}
        <button onClick={handleCommentDelete}>
          <img src="/x.svg" alt="" />
        </button>
      </div>
      <div>
        <p>{comment.body}</p>
      </div>
    </article>
  );
};

export default CommentCard;
