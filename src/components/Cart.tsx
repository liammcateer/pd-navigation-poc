'use client';
import { useCart } from '@/data-access/cartAtom';

export const Cart: React.FC = () => {
  const { cart, clearCart, removeRoom } = useCart();
  if (cart.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'white',
        padding: '1rem',
        borderTop: '1px solid black',
        textAlign: 'right',
      }}
    >
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
  );
};
