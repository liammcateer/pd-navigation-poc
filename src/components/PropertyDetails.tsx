'use client';
import { Cart } from '@/components/Cart';
import type { PropertyDetails as PropertyDetailsType } from '@/data-access/getPropertyDetails';
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

  return (
    <div>
      <h1>{name}</h1>
      <p>Location: {location}</p>
      Dates: {checkIn} - {checkOut}
      <h2>Rooms:</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Button onClick={() => openRoomDetailsTab(room.id)}>
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
      <Button onClick={() => openReviewsTab()}>Reviews</Button>
      <Cart />
    </div>
  );
};

const changeTab = (tab: string, params?: Record<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set('tab', tab);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      searchParams.set(key, value);
    });
  }
  window.history.pushState(
    { fromPropertyDetails: true },
    '',
    `?${searchParams.toString()}`,
  );
};

const openReviewsTab = () => changeTab('reviews');

const openRoomDetailsTab = (roomId: string) =>
  changeTab('roomDetails', { roomId });
