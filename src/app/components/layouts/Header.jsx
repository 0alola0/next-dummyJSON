import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/posts">
          <img style={{width:"24px"}} src="/next.svg" alt="" />
          <span>ALL POSTS</span>
        </Link>
        <Link href="/users">
          <img style={{width:"24px"}} src="/next.svg" alt="" />
          <span>ALL DOGS</span>
        </Link>
      </div>
    </header>
  );
}
