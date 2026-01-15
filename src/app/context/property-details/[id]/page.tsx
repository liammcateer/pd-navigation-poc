'use client';
import { usePropertyDetails } from '@/app/context/property-details/[id]/PropertyDetailsContext';
import { PropertyDetails } from '@/components/PropertyDetails';

export default function PropertyDetailsPage() {
  const propertyDetails = usePropertyDetails();

  return <PropertyDetails propertyDetails={propertyDetails} />;
}
