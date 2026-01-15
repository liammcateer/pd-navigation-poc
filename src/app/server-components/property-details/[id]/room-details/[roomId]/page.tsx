import { RoomDetails } from '@/components/RoomDetails';
import { SubPageHeader } from '@/components/SubPageHeader';
import { getPropertyDetails } from '@/data-access/getPropertyDetails';

export default async function RoomDetailsPage({
  params,
  searchParams,
}: Readonly<{
  params: Promise<{ id: string; roomId: string }>;
  searchParams: Promise<{ cacheId: string }>;
}>) {
  const { id, roomId } = await params;
  const { cacheId } = await searchParams;
  const { name, rooms } = await getPropertyDetails(id, cacheId);
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
