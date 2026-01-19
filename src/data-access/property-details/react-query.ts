import { getPropertyDetails } from '@/data-access/property-details/getPropertyDetails';
import { useQuery, type QueryClient } from '@tanstack/react-query';

const getQueryKey = (id: string) => ['propertyDetails', id];

export const prefetchPropertyDetails = async (
  id: string,
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: getQueryKey(id),
    queryFn: () => getPropertyDetails(id),
  });

export const usePropertyDetails = (id: string) => {
  const queryKey = getQueryKey(id);
  return useQuery({
    queryKey,
    queryFn: () => getPropertyDetails(id),
  });
};
