'use client';
import { BottomSheet } from '@/components/BottomSheet';
import { Cart } from '@/components/Cart';
import { SubPageHeader } from '@/components/SubPageHeader';
import { useCart } from '@/data-access/cartAtom';
import type { Room } from '@/data-access/getPropertyDetails';
import Button from '@mui/material/Button';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export interface RoomDetailsProps {
  rooms: Room[];
  propertyName: string;
}

export const RoomDetails: React.FC<RoomDetailsProps> = ({
  rooms,
  propertyName,
}) => {
  const searchParams = useSearchParams();
  const roomId = searchParams.get('roomId');
  const { addRoom, removeRoom, cart } = useCart();
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return <div>Room not found</div>;
  }

  const inCart = cart.some(({ id }) => id === room.id);

  return (
    <div>
      <SubPageHeader title={propertyName} subtitle={room.name} />
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
      <Button onClick={() => setBottomSheetOpen(true)}>View disclaimer</Button>
      <BottomSheet
        onClose={() => setBottomSheetOpen(false)}
        open={bottomSheetOpen}
      >
        <div style={{ padding: '16px' }}>
          <h2>Disclaimer</h2>
          <p>
            The room details provided are for informational purposes only and
            are subject to change without notice. Availability and pricing may
            vary based on demand and other factors. Please confirm all details
            with the property before booking.
          </p>
        </div>
      </BottomSheet>
      <Cart />
    </div>
  );
};
