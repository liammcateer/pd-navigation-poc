'use client';
import { SubPageDrawer } from '@/components/SubPageDrawer';
import { usePropertyDetailsRoutes } from '@/data-access/routes';

export default function ReviewsPage() {
  const { route } = usePropertyDetailsRoutes();

  return (
    <SubPageDrawer
      title="Reviews"
      subtitle="User reviews for this property"
      open={route?.name === 'reviews'}
    >
      review content
    </SubPageDrawer>
  );
}
