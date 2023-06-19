import Link from "next/link";

export default function Home() {

  return (
    <main style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
      <h1>WELCOME TO THE BLOG</h1>
      <h3>the main page is under construction</h3>
      <Link href="/posts/1">relocate me to the blog</Link>
    </main>
  )
}

