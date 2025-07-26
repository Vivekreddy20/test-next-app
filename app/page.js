import Link from "next/link";

export default function Home(){
  console.log("hello");
  
  return (
    <main>
      <h1>Home</h1>
      <Link href="/about">go to about</Link>
    </main>
  )
}