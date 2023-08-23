import Link from 'next/link'
import CountUp from './_component/CountUp'
import UserDisplay from './_component/UserDisplay'
import CountDisplay from './_component/CountDisplay'

export default function Home() {
  return (
    <main className='font-inter'>
      <h1>Home</h1>
      <Link href="/about">To About</Link>
      <br />
      <a href="/about">To About by a tag</a>
      <br />
      <p>Home Page<span className='font-zenkaku'>：ホームページ</span>
      </p>
      <CountUp />
      <CountDisplay />
      <UserDisplay />
    </main>
  )
}
