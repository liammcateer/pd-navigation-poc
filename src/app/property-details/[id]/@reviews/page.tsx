'use client';
import { SubPageDrawer } from '@/components/SubPageDrawer';
import { useSearchParams } from 'next/navigation';

export default function ReviewsPage() {
  const searchParams = useSearchParams();

  return (
    <SubPageDrawer
      title="Reviews"
      subtitle="User reviews for this property"
      open={searchParams.get('reviews') === 'true'}
    >
      review content
    </SubPageDrawer>
  );
}
