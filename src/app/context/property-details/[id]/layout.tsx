import { PropertyDetailsProvider } from '@/app/context/property-details/[id]/PropertyDetailsContext';
import { getPropertyDetails } from '@/data-access/getPropertyDetails';

export default async function PropertyDetailsLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;
  const propertyDetails = await getPropertyDetails(id);

  return (
    <PropertyDetailsProvider value={propertyDetails}>
      {children}
    </PropertyDetailsProvider>
  );
}
