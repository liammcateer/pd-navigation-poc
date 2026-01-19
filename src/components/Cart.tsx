'use client';
import { useCart } from '@/data-access/cartAtom';
import { Drawer } from '@mui/material';

export const Cart: React.FC = () => {
  const { cart, clearCart, removeRoom } = useCart();

  return (
    <Drawer anchor="bottom" open={cart.length > 0} variant="persistent">
      <div style={{ alignSelf: 'flex-end', padding: '16px' }}>
        <p>Cart:</p>
        <ul style={{ listStyle: 'none' }}>
          {cart.map((room) => (
            <li key={room.id}>
              {room.name} - $ {room.price}{' '}
              <button onClick={() => removeRoom(room.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: $ {cart.reduce((total, room) => total + room.price, 0)}</p>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </Drawer>
  );
};
