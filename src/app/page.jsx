import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/posts/1')

  return (
    <main>
      {/* 
      2 წამით ერორს აგდებს რედირექტის, 
      მაინც დავტოვებ იმიტორო
      კოდი რომ არსებობდეს აქ ჩავწერდი :დ */}
    </main>
  )
}

