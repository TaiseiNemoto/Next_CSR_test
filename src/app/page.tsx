import Link from 'next/link'
import CountUp from './_component/CountUp'

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/about">To About</Link>
      <br />
      <a href="/about">To About by a tag</a>
      <br />
      <p>Home Page</p>
      <CountUp />
    </main>
  )
}
