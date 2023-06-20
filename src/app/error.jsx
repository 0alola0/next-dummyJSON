"use client";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div>
      you have tried to reach a user that does not exist, you can:
      <br />
      <Link href="/users">see existing users</Link>
      <br />
      <Link href="/posts/1">go to the blog page</Link>
    </div>
  );
}
