import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found.</h1>
      <Link href={'/'}>
        <h3>Return home</h3>
      </Link>
    </div>
  )
}
