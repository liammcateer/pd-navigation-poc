import { MODE } from '@/app/mode';
import { RoomDetailsClient } from '@/app/property-details/[id]/@roomDetails/RoomDetailsClient';
import {
  getPropertyDetailsForPage,
  type PropertyDetailsPageProps,
} from '@/app/property-details/[id]/pageUtils';
import { SubPageDrawer } from '@/components/SubPageDrawer';

export default async function RoomDetailsPage(props: PropertyDetailsPageProps) {
  const { propertyDetails } = await getPropertyDetailsForPage(props);

  if (MODE === 'drawer') {
    return (
      <SubPageDrawer name="roomDetails">
        <RoomDetailsClient
          rooms={propertyDetails.rooms}
          propertyName={propertyDetails.name}
        />
      </SubPageDrawer>
    );
  }

  return (
    <RoomDetailsClient
      rooms={propertyDetails.rooms}
      propertyName={propertyDetails.name}
    />
  );
}
