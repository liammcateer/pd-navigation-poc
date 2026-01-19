'use client';
import { RoomDetails } from '@/components/RoomDetails';
import { SubPageDrawer } from '@/components/SubPageDrawer';
import type { Room } from '@/data-access/property-details/getPropertyDetails';
import { usePropertyDetailsRoutes } from '@/data-access/routes';

interface RoomDetailsProps {
  rooms: Room[];
  propertyName: string;
}

export const RoomDetailsClient: React.FC<RoomDetailsProps> = ({
  propertyName,
  rooms,
}) => {
  const { route } = usePropertyDetailsRoutes();

  const isRoomDetailsRoute = route?.name === 'roomDetails';

  const room = isRoomDetailsRoute
    ? rooms.find((room) => room.id === route?.params?.roomId)
    : undefined;

  return (
    <SubPageDrawer
      title={propertyName}
      subtitle={room?.name}
      open={isRoomDetailsRoute}
    >
      {room ? <RoomDetails room={room} /> : 'Room not found'}
    </SubPageDrawer>
  );
};
