'use client';

import { Drawer } from '@mui/material';
import { useEffect, type PropsWithChildren } from 'react';

interface SubPageDrawerProps {
  title: string;
  subtitle?: string;
  open: boolean;
  onClose?: () => void;
}
export const SubPageDrawer: React.FC<PropsWithChildren<SubPageDrawerProps>> = ({
  title,
  subtitle,
  children,
  open,
  onClose,
}) => {
  useEffect(() => {
    if (open) {
      window.history.pushState({}, '');
    }

    const handlePopState = () => {
      onClose?.();
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onClose, open]);

  return (
    <Drawer
      anchor="right"
      open={open}
      variant="persistent"
      slotProps={{ paper: { sx: { width: '100%' } } }}
    >
      <div
        style={{
          backgroundColor: 'darkblue',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          padding: '0rem 1rem',
          gap: '1rem',
        }}
      >
        <button onClick={() => window.history.back()}>Back</button>
        <div>
          <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{title}</p>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
      {children}
    </Drawer>
  );
};
