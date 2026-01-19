import { Cart } from '@/components/Cart';
import { QueryClientProvider } from '@/components/QueryClientProvider';
import { prefetchPropertyDetails } from '@/data-access/property-details/react-query';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

interface PropertyDetailsPageProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailsPage({
  children,
  params,
}: PropertyDetailsPageProps) {
  const queryClient = new QueryClient();
  const { id } = await params;
  await prefetchPropertyDetails(id, queryClient);

  return (
    <QueryClientProvider>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
        <Cart />
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
