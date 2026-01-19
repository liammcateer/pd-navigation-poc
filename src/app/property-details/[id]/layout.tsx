import { Cart } from '@/components/Cart';

interface PropertyDetailsPageProps {
  children: React.ReactNode;
  reviews: React.ReactNode;
  roomDetails: React.ReactNode;
}

export default async function PropertyDetailsPage({
  children,
  reviews,
  roomDetails,
}: PropertyDetailsPageProps) {
  return (
    <>
      {children}
      {reviews}
      {roomDetails}
      <Cart />
    </>
  );
}
