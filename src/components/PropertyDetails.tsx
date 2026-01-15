import type { PropertyDetails as PropertyDetailsType } from '@/data-access/getPropertyDetails';
import Link from 'next/link';

export interface PropertyDetailsProps {
  propertyDetails: PropertyDetailsType;
  cacheId?: string;
  inTabs?: boolean;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  propertyDetails,
  cacheId,
  inTabs,
}) => {
  const { name, location, rooms, facilities } = propertyDetails;

  return (
    <div>
      <h1>{name}</h1>
      <p>Location: {location}</p>
      <h2>Rooms:</h2>
      <ul>
        {rooms.map((room) => {
          return (
            <li key={room.id}>
              {inTabs ? (
                <button
                  onClick={() =>
                    window.history.pushState(
                      undefined,
                      '',
                      `?tab=room-details&selectedRoom=${room.id}`
                    )
                  }
                >
                  {room.name}
                </button>
              ) : (
                <Link
                  href={`./${propertyDetails.id}/room-details/${room.id}${
                    cacheId ? `?cacheId=${cacheId}` : ''
                  }`}
                >
                  {room.name}
                </Link>
              )}
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
    </div>
  );
};
