import { getPropertyDetails } from '@/data-access/getPropertyDetails';
import { redirect } from 'next/navigation';

export interface PropertyDetailsParams {
  id: string;
}

export interface PropertyDetailsSearchParams {
  checkIn?: string;
  checkOut?: string;
}

export interface PropertyDetailsPageProps {
  params: Promise<PropertyDetailsParams>;
  searchParams: Promise<PropertyDetailsSearchParams>;
}

export const getPropertyDetailsForPage = async ({
  params,
  searchParams,
}: PropertyDetailsPageProps) => {
  const { id } = await params;
  const { checkIn, checkOut } = await searchParams;
  if (!checkOut || !checkIn) {
    redirect('/');
  }

  return {
    propertyDetails: await getPropertyDetails(id),
    checkIn,
    checkOut,
  };
};
