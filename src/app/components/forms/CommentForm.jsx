"use client";
import useAxiosPost from "@/app/hooks/useAxiosPost";
import React, { useState, useEffect } from "react";
import CommentCard from "../cards/CommentCard";

const CommentForm = ({postID}) => {
  const { appendData, loading, error, multiData } = useAxiosPost(
    "https://dummyjson.com/comments/add"
  );
  const [commentText, setCommentText] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newData = {
      body: commentText,
      postId: postID,
      userId: 1,
    };
    appendData(newData);
  };


  return (
    <>
      {multiData?.map((comment, index) => (
        <CommentCard key={index} comment={comment} newComment={true}/>
      ))}

      <div className="form_container">
        <h4>Leave a comment</h4>
        <form onSubmit={handleFormSubmit} action="">
          <div className="form_item">
            <input required type="name" placeholder="author" />
          </div>
          <div className="form_item">
            <input
              required
              type="text"
              placeholder="comment text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="text_input"
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
