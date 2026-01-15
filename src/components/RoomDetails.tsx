'use client';
import { useCart } from '@/data-access/cartAtom';
import type { Room } from '@/data-access/getPropertyDetails';

export interface RoomDetailsProps {
  room: Room;
}

export const RoomDetails: React.FC<RoomDetailsProps> = ({ room }) => {
  const { addRoom, removeRoom, cart } = useCart();
  const inCart = cart.some(({ id }) => id === room.id);

  return (
    <div>
      <h1>{room.name}</h1>
      <p>Size: {room.size}</p>
      <p>Price: ${room.price}</p>
      {inCart ? (
        <button onClick={() => removeRoom(room.id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addRoom(room)}>Add to Cart</button>
      )}
      <h2>Facilities:</h2>
      <ul>
        {room.facilities.map((facility) => (
          <li key={facility}>{facility}</li>
        ))}
      </ul>
    </div>
  );
};
