'use client';
import { MODE } from '@/app/mode';
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
  if (MODE === 'drawer') {
    return (
      <>
        {children}
        {reviews}
        {roomDetails}
      </>
    );
  }
  const subPage = searchParams.get('subPage');

  if (subPage === 'reviews') {
    return reviews;
  }

  if (subPage === 'roomDetails') {
    return roomDetails;
  }

  return children;
}
