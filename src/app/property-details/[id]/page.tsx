'use client';
import { PropertyDetails } from '@/components/PropertyDetails';
import { usePropertyDetails } from '@/data-access/property-details/react-query';
import { useParams, useSearchParams } from 'next/navigation';

export default function PropertyDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data: propertyDetails } = usePropertyDetails(id);
  const searchParams = useSearchParams();
  const checkIn = searchParams.get('checkIn') ?? undefined;
  const checkOut = searchParams.get('checkOut') ?? undefined;

  if (!propertyDetails) {
    return <div>Loading...</div>;
  }

  return (
    <PropertyDetails
      propertyDetails={propertyDetails}
      checkIn={checkIn}
      checkOut={checkOut}
    />
  );
}
