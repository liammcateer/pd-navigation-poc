'use client';
import { PropertyDetails } from '@/data-access/getPropertyDetails';
import { createContext, useContext, type ProviderProps } from 'react';

const Context = createContext<PropertyDetails | undefined>(undefined);

export const PropertyDetailsProvider: React.FC<
  ProviderProps<PropertyDetails>
> = (props) => {
  return <Context.Provider {...props} />;
};

export const usePropertyDetails = (): PropertyDetails => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      'usePropertyDetails must be used within a PropertyDetailsProvider'
    );
  }
  return context;
};
