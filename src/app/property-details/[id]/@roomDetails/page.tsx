import { RoomDetailsClient } from '@/app/property-details/[id]/@roomDetails/RoomDetailsClient';
import { getPropertyDetails } from '@/data-access/property-details/getPropertyDetails';

interface RoomDetailsPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ roomId?: string }>;
}

export default async function RoomDetailsPage({
  params,
}: RoomDetailsPageProps) {
  const { id } = await params;
  const propertyDetails = await getPropertyDetails(id);

  return (
    <RoomDetailsClient
      rooms={propertyDetails.rooms}
      propertyName={propertyDetails.name}
    />
  );
}
