'use client';

import { RoomDetails } from '@/components/RoomDetails';
import { SubPageHeader } from '@/components/SubPageHeader';
import type { Room } from '@/data-access/getPropertyDetails';
import { useSearchParams } from 'next/navigation';

export interface RoomDetailsClientProps {
  rooms: Room[];
  propertyName: string;
}

export const RoomDetailsClient: React.FC<RoomDetailsClientProps> = ({
  rooms,
  propertyName,
}) => {
  const searchParams = useSearchParams();
  const roomId = searchParams.get('roomId');

  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <>
      <SubPageHeader title={propertyName} subtitle={room.name} />
      <RoomDetails room={room} />
    </>
  );
};
