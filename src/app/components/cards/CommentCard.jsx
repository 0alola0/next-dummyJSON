
const CommentCard = ({comment}) => {
  return (
    <article className="comment">
        <span>{comment.username}</span>
        <div>
            <p>
                {comment.body}
            </p>
        </div>
    </article>
  );
}

export default CommentCard;
