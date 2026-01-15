'use client';
import { PropertyDetails } from '@/components/PropertyDetails';
import { RoomDetails } from '@/components/RoomDetails';
import { SubPageHeader } from '@/components/SubPageHeader';
import type { PropertyDetails as PropertyDetailsType } from '@/data-access/getPropertyDetails';
import { useSearchParams } from 'next/navigation';

export interface PropertyDetailsClientProps {
  propertyDetails: PropertyDetailsType;
}

export const PropertyDetailsClient: React.FC<PropertyDetailsClientProps> = ({
  propertyDetails,
}) => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  switch (tab) {
    case 'room-details':
      return <RoomDetailsTab propertyDetails={propertyDetails} />;
    default:
      return <PropertyDetails propertyDetails={propertyDetails} inTabs />;
  }
};

const RoomDetailsTab: React.FC<{
  propertyDetails: PropertyDetailsType;
}> = ({ propertyDetails }) => {
  const searchParams = useSearchParams();
  const selectedRoomId = searchParams.get('selectedRoom');

  const room = propertyDetails.rooms.find((room) => room.id === selectedRoomId);

  if (!room) {
    return <div>No room selected</div>;
  }

  return (
    <div>
      <SubPageHeader title={propertyDetails.name} subtitle={room.name} />
      <RoomDetails room={room} />
    </div>
  );
};
