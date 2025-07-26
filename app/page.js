import Link from "next/link";

export default function Home(){
  return (
    <main>
      <h1>this is home</h1>
      <ul>
        <li><Link href="/meals">Meals</Link></li>
        <li><Link href="/meals/share">share meals</Link></li>
        <li><Link href="/community">community</Link></li>
      </ul>
    </main>
  )
}