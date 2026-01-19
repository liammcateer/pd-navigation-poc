'use client';
import { RoomDetails } from '@/components/RoomDetails';
import { SubPageDrawer } from '@/components/SubPageDrawer';
import type {
  PropertyDetails as PropertyDetailsType,
  Room,
} from '@/data-access/property-details/getPropertyDetails';
import { Button } from '@mui/material';
import { useState } from 'react';

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
  const [selectedRoom, setSelectedRoom] = useState<Room>();
  const [reviewsOpen, setReviewsOpen] = useState(false);

  return (
    <div>
      <h1>{name}</h1>
      <p>Location: {location}</p>
      Dates: {checkIn} - {checkOut}
      <h2>Rooms:</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Button onClick={() => setSelectedRoom(room)}>
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
      <Button onClick={() => setReviewsOpen(true)}>Reviews</Button>
      <SubPageDrawer
        title="Reviews"
        subtitle="User reviews for this property"
        open={reviewsOpen}
        onClose={() => setReviewsOpen(false)}
      >
        review content
      </SubPageDrawer>
      <SubPageDrawer
        title={name}
        subtitle={selectedRoom?.name}
        open={!!selectedRoom}
        onClose={() => setSelectedRoom(undefined)}
      >
        {selectedRoom && <RoomDetails room={selectedRoom} />}
      </SubPageDrawer>
    </div>
  );
};
