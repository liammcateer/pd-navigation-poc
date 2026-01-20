'use client';
import { MODE } from '@/app/mode';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Property details routing POC</h1>

      <Link href="/property-details/1?checkIn=2026-02-01&checkOut=2026-02-10">
        Property details using {MODE === 'drawer' ? 'drawer' : 'conditional'}{' '}
        rendering
      </Link>
    </div>
  );
}
