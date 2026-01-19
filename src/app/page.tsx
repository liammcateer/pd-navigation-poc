'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Property details routing POC</h1>

      <Link href="/property-details/1">Using react-query</Link>
    </div>
  );
}
