import type { Room } from '@/data-access/getPropertyDetails';

export interface RoomDetailsProps {
  room: Room;
}

export const RoomDetails: React.FC<RoomDetailsProps> = ({ room }) => {
  return (
    <div>
      <h1>{room.name}</h1>
      <p>Size: {room.size}</p>
      <p>Price: ${room.price}</p>
      <h2>Facilities:</h2>
      <ul>
        {room.facilities.map((facility) => (
          <li key={facility}>{facility}</li>
        ))}
      </ul>
    </div>
  );
};
