'use client';
import type { Room } from '@/data-access/getPropertyDetails';
import { atom, useAtom } from 'jotai';

const cartAtom = atom<Room[]>([]);

export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const addRoom = (room: Room) => {
    if (cart.some((r) => r.id === room.id)) {
      return;
    }
    setCart((prevCart) => {
      return [...prevCart, room];
    });
  };

  const removeRoom = (roomId: string) => {
    setCart((prevCart) => {
      return prevCart.filter((room) => room.id !== roomId);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    addRoom,
    removeRoom,
    clearCart,
  };
};
