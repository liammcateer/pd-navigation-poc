import {
  getPropertyDetailsForPage,
  type PropertyDetailsPageProps,
} from '@/app/property-details/[id]/pageUtils';
import { RoomDetails } from '@/components/RoomDetails';

export default async function RoomDetailsPage(props: PropertyDetailsPageProps) {
  const { propertyDetails } = await getPropertyDetailsForPage(props);

  return (
    <RoomDetails
      rooms={propertyDetails.rooms}
      propertyName={propertyDetails.name}
    />
  );
}
