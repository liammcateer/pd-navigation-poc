'use client';
import type { PropertyDetails as PropertyDetailsType } from '@/data-access/property-details/getPropertyDetails';
import { Button } from '@mui/material';
import { useSearchParams } from 'next/navigation';

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
  const searchParams = useSearchParams();
  const { name, location, rooms, facilities } = propertyDetails;

  return (
    <div>
      <h1>{name}</h1>
      <p>Location: {location}</p>
      Dates: {checkIn} - {checkOut}
      <h2>Rooms:</h2>
      <ul>
        {rooms.map((room) => {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set('roomId', room.id);
          return (
            <li key={room.id}>
              <Button
                onClick={() =>
                  window.history.pushState(
                    {},
                    '',
                    getRoomLink(searchParams, room.id)
                  )
                }
              >
                {room.name} - ${room.price}
              </Button>
            </li>
          );
        })}
      </ul>
      <h2>Facilities:</h2>
      <ul>
        {facilities.map((facility) => (
          <li key={facility}>{facility}</li>
        ))}
      </ul>
      <Button
        onClick={() =>
          window.history.pushState({}, '', getReviewsLink(searchParams))
        }
      >
        Reviews
      </Button>
    </div>
  );
};

const getReviewsLink = (searchParams: URLSearchParams) => {
  const newSearchParams = new URLSearchParams(searchParams);
  newSearchParams.set('reviews', 'true');
  return `?${newSearchParams.toString()}`;
};

const getRoomLink = (searchParams: URLSearchParams, roomId: string) => {
  const newSearchParams = new URLSearchParams(searchParams);
  newSearchParams.set('roomId', roomId);
  return `?${newSearchParams.toString()}`;
};
