import { getPropertyDetailsForPage } from '@/app/property-details/[id]/pageUtils';
import { PropertyDetails } from '@/components/PropertyDetails';

interface PropertyDetailsPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ checkIn?: string; checkOut?: string }>;
}

export default async function PropertyDetailsPage(
  props: PropertyDetailsPageProps,
) {
  const { propertyDetails, checkIn, checkOut } =
    await getPropertyDetailsForPage(props);

  return (
    <PropertyDetails
      propertyDetails={propertyDetails}
      checkIn={checkIn}
      checkOut={checkOut}
    />
  );
}
