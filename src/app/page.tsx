import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Property details routing POC</h1>
      <ul>
        <li>
          <Link href="/context/property-details/1">Using Context</Link>
        </li>
        <li>
          <Link href="/server-components/property-details/1">
            Using Server Components
          </Link>
        </li>
        <li>
          <Link href="/tabs/property-details/1">
            Using Tabs (or conditional rendering)
          </Link>
        </li>
      </ul>
    </div>
  );
}
