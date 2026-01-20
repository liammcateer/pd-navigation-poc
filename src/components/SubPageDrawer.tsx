'use client';
import { Drawer } from '@mui/material';
import { useSearchParams } from 'next/navigation';

export interface SubPageDrawerProps {
  name: string;
  children: React.ReactNode;
}

export const SubPageDrawer: React.FC<SubPageDrawerProps> = ({
  children,
  name,
}) => {
  const searchParams = useSearchParams();
  const subPage = searchParams.get('subPage');

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      slotProps={{ paper: { sx: { width: '100%' } } }}
      open={subPage === name}
      onClose={() => window.history.back()}
    >
      {children}
    </Drawer>
  );
};
