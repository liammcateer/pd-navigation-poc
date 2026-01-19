'use client';
import type { PropertyDetails as PropertyDetailsType } from '@/data-access/property-details/getPropertyDetails';
import { Button } from '@mui/material';
import Link from 'next/link';
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
              <Link
                href={`./${
                  propertyDetails.id
                }/room-details?${newSearchParams.toString()}`}
              >
                {room.name}
              </Link>
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
        LinkComponent={Link}
        href={`./${propertyDetails.id}/reviews?${searchParams.toString()}`}
      >
        Reviews
      </Button>
    </div>
  );
};
