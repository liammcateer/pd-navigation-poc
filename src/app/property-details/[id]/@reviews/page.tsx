import { MODE } from '@/app/mode';
import {
  getPropertyDetailsForPage,
  type PropertyDetailsPageProps,
} from '@/app/property-details/[id]/pageUtils';
import { SubPageDrawer } from '@/components/SubPageDrawer';
import { SubPageHeader } from '@/components/SubPageHeader';

export default async function ReviewsPage(props: PropertyDetailsPageProps) {
  const { propertyDetails } = await getPropertyDetailsForPage(props);
  if (MODE === 'drawer') {
    return (
      <SubPageDrawer name="reviews">
        <SubPageHeader title={propertyDetails.name} subtitle="Reviews" />
        Reviews
      </SubPageDrawer>
    );
  }

  return (
    <div>
      <SubPageHeader title={propertyDetails.name} subtitle="Reviews" />
      Reviews
    </div>
  );
}
