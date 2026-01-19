'use client';

import { Drawer } from '@mui/material';
import { type PropsWithChildren } from 'react';

interface SubPageDrawerProps {
  title: string;
  subtitle?: string;
  open: boolean;
}
export const SubPageDrawer: React.FC<PropsWithChildren<SubPageDrawerProps>> = ({
  title,
  subtitle,
  children,
  open,
}) => (
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
