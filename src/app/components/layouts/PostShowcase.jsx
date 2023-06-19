import React from "react";
import Link from "next/link";

const PostShowcase = ({ post }) => {
  return (
    <section className="intro_showcase">
      <figure>
        <img
          src="https://media.istockphoto.com/id/853158850/photo/beautiful-sky-landscape-at-sunset.jpg?s=612x612&w=0&k=20&c=aodgrSCa0U18lxPS44jmB-lPnJtc_P1uZXWUOOGtgqs="
          alt=""
        />
      </figure>
      <h2>{post.title}</h2>
      <div className="">
        <Link href={`/users/${post.userId}`}>
          <figure>
            <img style={{ width: "20px" }} src="/next.svg" alt="" />
          </figure>
          <span>
            {post.userData.firstName} {post.userData.lastName}
          </span>
        </Link>
      </div>
      <div>
        <p>{post.body}</p>
        <p>{post.body}</p>
      </div>
    </section>
  );
};

export default PostShowcase;
