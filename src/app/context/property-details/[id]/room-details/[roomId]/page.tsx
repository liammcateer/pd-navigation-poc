'use client';

import { usePropertyDetails } from '@/app/context/property-details/[id]/PropertyDetailsContext';
import { RoomDetails } from '@/components/RoomDetails';
import { SubPageHeader } from '@/components/SubPageHeader';
import { use } from 'react';

export default function RoomDetailsPage({
  params,
}: Readonly<{
  params: Promise<{ roomId: string }>;
}>) {
  const { roomId } = use(params);
  const { name, rooms } = usePropertyDetails();
  const room = rooms.find((room) => room.id === roomId);

  if (!room) {
    return <p>The requested room does not exist.</p>;
  }

  return (
    <div>
      <SubPageHeader title={name} subtitle={room.name} />
      <RoomDetails room={room} />
    </div>
  );
}
