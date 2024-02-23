import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h2>Not Found </h2>
      <p>{`Sorry, the page you're looking for does not exsit. `}</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound;
