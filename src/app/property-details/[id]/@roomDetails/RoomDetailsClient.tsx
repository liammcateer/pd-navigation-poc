'use client';
import { RoomDetails } from '@/components/RoomDetails';
import { SubPageDrawer } from '@/components/SubPageDrawer';
import type { Room } from '@/data-access/property-details/getPropertyDetails';
import { useSearchParams } from 'next/navigation';

interface RoomDetailsProps {
  rooms: Room[];
  propertyName: string;
}

export const RoomDetailsClient: React.FC<RoomDetailsProps> = ({
  propertyName,
  rooms,
}) => {
  const searchParams = useSearchParams();
  const roomId = searchParams.get('roomId');

  const room = rooms.find((room) => room.id === roomId);

  return (
    <SubPageDrawer title={propertyName} subtitle={room?.name} open={!!roomId}>
      {room ? <RoomDetails room={room} /> : 'Room not found'}
    </SubPageDrawer>
  );
};
