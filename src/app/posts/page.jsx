//ამ ვარიანტში არ არის პაგინაცია, უბრალოდ ყველა პოსტია ჩატვირთული სატესტოდ. რორამე პირველ ფეიჯად გადავაკეთებ პაგინაცია თუა სწორი ვარიანტი

import axios from 'axios';
import Link from 'next/link';

const getPosts = async () => {
    const response = await axios.get('https://dummyjson.com/posts?limit=100&select=title,reactions,userId');
    return response.data;
};

export default async function Posts() {
  const posts = await getPosts();
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts.posts.map((post) => (
        <Link key={post.id} href={`/posts/single/${post.id}`}><h1>{post.title}</h1></Link>
      ))}
    </div>
  );
}
