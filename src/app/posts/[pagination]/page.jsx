//ამ ვარიანტში არის პაგინაცია
import { PostCard } from "@/app/components";
import axios from "axios";
import Link from "next/link";

const getPostsPage = async (page, skip) => {
  const response = await axios.get(
    `https://dummyjson.com/posts?limit=${page}&skip=${skip}`
  );
  return response.data;
};
// const getUsersData = async (id) => {
//     const response = await axios.get(
//         `https://dummyjson.com/users/${id}`
//     );
//     return response.data;
// }
//უსერების დაფეჩვა ხდება ცალკე და მერე find-ით შეიძლება გაყოლება რო სერვერსაიდად დარჩეს

export default async function PaginationPosts({ params }) {
  //ეს ცვლადი შეიძლება მომავალში დინამიურად გაიწეროს ინფუთით, ეხლა იყოს 50:დ
  const itemsOnPage = 10;
  const currentPage = +params.pagination;
  const skip = (+params.pagination - 1) * itemsOnPage;
  const limit = itemsOnPage;
  //ერორის მაგივრად რედირექციის ლინკს ვუგდებ, რორამე პირველზე გადავა:დ
  if (isNaN(currentPage)) {
    return renderErrorMessage();
  }
  const posts = await getPostsPage(limit, skip);


  //გვერდების დათვლა. სვავს უახლოეს(მაღალ) მთელ რიცხვს
  const pageAmount = Math.ceil(posts.total / itemsOnPage);
  const pageNumbers = Array.from(
    { length: pageAmount },
    (_, index) => index + 1
  );
  if (!posts || posts.posts.length < 1) {
    return renderErrorMessage();
  }


  return (
    <div>
      {pageNumbers.map((page) => (
        <Link key={page} href={`/posts/${page}`}>
          {page}
        </Link>
      ))}
      {posts.posts.map(async (post) => {
        return (
          <div key={post.id}>
            <PostCard post={post}/>
          </div>
        );
      })}
      {/* {posts.posts.map((post) => (
        //getSingle user should be called here so that i can send it the first and last name
        <div key={post.id}> 
            <h1 >{post.title}</h1>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
        </div>
      ))} */}
    </div>
  );
}

function renderErrorMessage() {
  return (
    <div>
      no posts to show... would you like to move to an existing page?
      <Link href="/posts/1">an actual page here</Link>
    </div>
  );
}
