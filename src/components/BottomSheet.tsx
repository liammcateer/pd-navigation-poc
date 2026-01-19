import { Button, Drawer, type DrawerProps } from '@mui/material';

export interface BottomSheetProps extends DrawerProps {
  onClose?: () => void;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  children,
  onClose,
  ...drawerProps
}) => (
  <Drawer anchor="bottom" onClose={onClose} {...drawerProps}>
    <div style={{ textAlign: 'right' }}>
      <Button onClick={onClose}>Close</Button>
    </div>
    {children}
  </Drawer>
);
