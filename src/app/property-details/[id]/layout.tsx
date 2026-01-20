'use client';
import { useSearchParams } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
  reviews: React.ReactNode;
  roomDetails: React.ReactNode;
}

export default function Layout({
  children,
  reviews,
  roomDetails,
}: LayoutProps) {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');

  if (tab === 'reviews') {
    return reviews;
  }

  if (tab === 'roomDetails') {
    return roomDetails;
  }

  return children;
}
