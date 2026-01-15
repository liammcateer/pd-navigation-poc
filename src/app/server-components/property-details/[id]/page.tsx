import { PropertyDetails } from '@/components/PropertyDetails';
import { getPropertyDetails } from '@/data-access/getPropertyDetails';

export default async function PropertyDetailsPage({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;
  const cacheId = Math.random().toString(36).substring(7);
  const propertyDetails = await getPropertyDetails(id, cacheId);

  return (
    <PropertyDetails propertyDetails={propertyDetails} cacheId={cacheId} />
  );
}
