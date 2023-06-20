//ამ ვარიანტში არის პაგინაცია
import { PostCard } from "@/app/components";
import axios from "axios";
import Link from "next/link";

const getPostsPage = async (page, skip) => {
  const response = await axios.get(
    `https://dummyjson.com/posts?limit=${page}&skip=${skip}`
  );
  const data = response.data;
  //ფეიჯის ყველა პოსტის აიდით გამოიძახება იუზერის ფუნქცია სადაც id-ს მიხედვით იუზერ დატა ემატება თითო პოსტის ობიექტს. ისე სხვანაირად სახელი და გვარი არცერთ api-ს გამოქონდა პოსტთან ერთად:დ
  //ესე დამაპვის გამო ძალიან ბევრი რიქუესთი ხდება ერთდროულად და თუ ძალიან გადავტვირთე ედიტებით 429-ს აგდებს. სხვა ლოგიკა ვერ მოვიფიქრე სერვერის მხარეს, რომ საერთო ობიექტი შემექმნა სადაც პოსტიც და იუზერიც იქნებოდა
  const usersDataPromises = data.posts.map((post) => getUsersData(post.userId));
  const usersData = await Promise.all(usersDataPromises);
  data.posts.forEach((post, index) => {
    post.userData = usersData[index];
  });
  return data;
};

const getUsersData = async (id) => {
  const response = await axios.get(`https://dummyjson.com/users/${id}`);
  return response.data;
};

export default async function PaginationPosts({ params }) {
  //ეს ცვლადი შეიძლება მომავალში დინამიურად გაიწეროს ინფუთით, ეხლა იყოს 12:დ
  const itemsOnPage = 12;
  const currentPage = +params.pagination;
  const skip = (+params.pagination - 1) * itemsOnPage;
  const limit = itemsOnPage;
  //ერორის მაგივრად რედირექციის ლინკს ვუგდებ, რორამე პირველზე გადავა:დ
  //დანარჩენ ფეიჯებზე ყველგან ჩვეულებრივი ნექსთის error boundry მოქმედებს რედირექციის ლინკებით
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
    <div className="intro_posts">
      <div className="container">
        {posts.posts.map((post) => (
          <div key={post.id}>
            <PostCard post={post} user={post.userData} />
          </div>
        ))}
      </div>

      <div className="pages">
        {pageNumbers.map((page) => (
          <Link key={page} href={`/posts/${page}`}>
            <p className={currentPage === page? "active": ""}>{page}</p>
          </Link>
        ))}
      </div>
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
