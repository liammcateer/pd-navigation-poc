'use client';

import {
  QueryClientProvider as Provider,
  QueryClient,
} from '@tanstack/react-query';
import { useState, type PropsWithChildren } from 'react';

export const QueryClientProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [queryClient] = useState(() => new QueryClient());

  return <Provider client={queryClient}>{children}</Provider>;
};
