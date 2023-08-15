import Link from 'next/link'

export default function AboutChild() {
  return (
    <main>
      <h1>About Child</h1>
      <Link href="/">To Home</Link>
      <br />
      <a href="/">To Home by a tag</a>
      <br />
      <br />
      <Link href="/about">To About</Link>
      <br />
      <a href="/about">To About by a tag</a>
      <p>About Child Page</p>
    </main>
  )
}
