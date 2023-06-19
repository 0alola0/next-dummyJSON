import Link from "next/link";
import React from "react";

const PostCards = ({ post, user }) => {
  const randomSrc = imageLinks[Math.floor(Math.random() * imageLinks.length)];

  return (
    <article className="postCard">
      <Link href={`/posts/single/${post.id}`}>
        <figure className="main_image">
          <img src={randomSrc} alt="" />
        </figure>
      </Link>
      <div className="post_body">
        <h3>{post.title}</h3>
        <div className="individual">
          <Link href={`/users/${post.userId}`}>
            <figure>
              <img src="/next.svg" alt="" />
            </figure>
            <span>
              {user.firstName} {user.lastName}
            </span>
          </Link>
        </div>
        <div>
        <p>{post.body.length > 150 ? `${post.body.substring(0, 150)}...` : post.body}</p>
        </div>
      </div>
    </article>
  );
};

export default PostCards;

const imageLinks = [
  "https://shrm-res.cloudinary.com/image/upload/c_crop,h_706,w_1255,x_0,y_124/w_auto:100,w_1200,q_35,f_auto/v1/Employee%20Relations/Take_Your_Dog_to_Work_yc90cf.jpg",
  "https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.18169-9/28958442_10155284104615913_2890013405431470954_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jQQFc0KJW1cAX-9o_fG&_nc_oc=AQkNKXgqO8Mm4TphafnpFCxmcEKfZ1CVLoNu_Z0-96i9dPzE12n11rIqGYjkyEG5Cpg&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfAXmQzX0jaoRe6quSMiLZmnFVx56XD2Ria6ZgTTLhhwMg&oe=64B3F130",
  "https://iheartdogs.com/wp-content/uploads/2018/11/jobs-for-working-dog-breeds.png",
  "https://nypost.com/wp-content/uploads/sites/2/2016/05/bar.jpg?quality=75&strip=all",
  "https://i2-prod.mirror.co.uk/incoming/article28484947.ece/ALTERNATES/n615/1_Labrador-Retriever-looking-out-a-window.jpg",
];
