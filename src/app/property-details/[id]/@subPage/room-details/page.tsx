'use client';
import { RoomDetails } from '@/components/RoomDetails';
import { SubPageDrawer } from '@/components/SubPageDrawer';
import { usePropertyDetails } from '@/data-access/property-details/react-query';
import { useParams, useSearchParams } from 'next/navigation';

export default function RoomDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const roomId = searchParams.get('roomId');

  const { data: propertyDetails } = usePropertyDetails(id);

  const room = propertyDetails?.rooms.find((room) => room.id === roomId);

  if (!room) {
    return null;
  }

  return (
    <SubPageDrawer title={propertyDetails?.name ?? ''} subtitle={room.name}>
      <RoomDetails room={room} />
    </SubPageDrawer>
  );
}
