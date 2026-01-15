import { getPropertyDetails } from '@/data-access/getPropertyDetails';
import { PropertyDetailsProvider } from './PropertyDetailsContext';

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
