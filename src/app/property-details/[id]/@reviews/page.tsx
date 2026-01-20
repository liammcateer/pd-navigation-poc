import {
  getPropertyDetailsForPage,
  type PropertyDetailsPageProps,
} from '@/app/property-details/[id]/pageUtils';
import { SubPageHeader } from '@/components/SubPageHeader';

export default async function ReviewsPage(props: PropertyDetailsPageProps) {
  const { propertyDetails } = await getPropertyDetailsForPage(props);
  return (
    <div>
      <SubPageHeader title={propertyDetails.name} subtitle="Reviews" />
      Reviews
    </div>
  );
}
