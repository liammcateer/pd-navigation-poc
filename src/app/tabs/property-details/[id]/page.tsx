import { PropertyDetailsClient } from '@/app/tabs/property-details/[id]/PropertyDetailsClient';
import { Cart } from '@/components/Cart';
import { getPropertyDetails } from '@/data-access/getPropertyDetails';

interface PropertyDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailsPage({
  params,
}: Readonly<PropertyDetailsPageProps>) {
  const { id } = await params;
  const propertyDetails = await getPropertyDetails(id);

  return (
    <div>
      <PropertyDetailsClient propertyDetails={propertyDetails} />
      <Cart />
    </div>
  );
}
