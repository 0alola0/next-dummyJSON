//ამ ვარიანტში არ არის პაგინაცია, უბრალოდ ყველა პოსტია ჩატვირთული სატესტოდ. რორამე პირველ ფეიჯად გადავაკეთებ პაგინაცია თუა სწორი ვარიანტი

import axios from 'axios';

const getPosts = async () => {
    const response = await axios.get('https://dummyjson.com/posts?limit=100&select=title,reactions,userId');
    return response.data;
};

export default async function Posts() {
  const posts = await getPosts();
  console.log(posts.posts)
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts.posts.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </div>
  );
}
