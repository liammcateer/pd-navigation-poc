import { Cart } from '@/components/Cart';
import { PropertyDetails } from '@/components/PropertyDetails';
import { getPropertyDetails } from '@/data-access/property-details/getPropertyDetails';

interface PropertyDetailsPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ checkIn?: string; checkOut?: string }>;
}

export default async function PropertyDetailsPage({
  params,
  searchParams,
}: PropertyDetailsPageProps) {
  const { id } = await params;
  const { checkIn, checkOut } = await searchParams;

  const propertyDetails = await getPropertyDetails(id);

  return (
    <>
      <PropertyDetails
        propertyDetails={propertyDetails}
        checkIn={checkIn}
        checkOut={checkOut}
      />
      <Cart />
    </>
  );
}
