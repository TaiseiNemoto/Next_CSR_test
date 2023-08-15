import Link from 'next/link'

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <Link href="/">To Home</Link>
      <br />
      <a href="/">To Home by a tag</a>
      <p>About Page</p>
      <br />
      <br />
      <Link href="/about/about_child/">To About Child</Link>
      <br />
      <a href="/about/about_child/">To About Child by a tag</a>
    </main>
  )
}
