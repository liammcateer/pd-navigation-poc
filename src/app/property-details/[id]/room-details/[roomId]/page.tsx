'use client';
import { RoomDetails } from '@/components/RoomDetails';
import { SubPageDrawer } from '@/components/SubPageDrawer';
import { usePropertyDetails } from '@/data-access/property-details/react-query';
import { useParams } from 'next/navigation';

export default function RoomDetailsPage() {
  const { id, roomId } = useParams<{ id: string; roomId: string }>();

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
