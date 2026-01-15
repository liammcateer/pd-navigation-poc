import { PropertyDetailsClient } from '@/app/tabs/property-details/[id]/PropertyDetailsClient';
import { getPropertyDetails } from '@/data-access/getPropertyDetails';

interface PropertyDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailsPage({
  params,
}: Readonly<PropertyDetailsPageProps>) {
  const { id } = await params;
  const propertyDetails = await getPropertyDetails(id);

  return <PropertyDetailsClient propertyDetails={propertyDetails} />;
}
