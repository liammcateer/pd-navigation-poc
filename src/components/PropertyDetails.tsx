'use client';
import type { PropertyDetails as PropertyDetailsType } from '@/data-access/property-details/getPropertyDetails';
import { usePropertyDetailsRoutes } from '@/data-access/routes';
import { Button } from '@mui/material';

export interface PropertyDetailsProps {
  propertyDetails: PropertyDetailsType;
  checkIn?: string;
  checkOut?: string;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  propertyDetails,
  checkIn,
  checkOut,
}) => {
  const { name, location, rooms, facilities } = propertyDetails;
  const { changeRoute } = usePropertyDetailsRoutes();

  return (
    <div>
      <h1>{name}</h1>
      <p>Location: {location}</p>
      Dates: {checkIn} - {checkOut}
      <h2>Rooms:</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Button
              onClick={() =>
                changeRoute({
                  name: 'roomDetails',
                  params: { roomId: room.id },
                })
              }
            >
              {room.name} - ${room.price}
            </Button>
          </li>
        ))}
      </ul>
      <h2>Facilities:</h2>
      <ul>
        {facilities.map((facility) => (
          <li key={facility}>{facility}</li>
        ))}
      </ul>
      <Button onClick={() => changeRoute({ name: 'reviews' })}>Reviews</Button>
    </div>
  );
};
