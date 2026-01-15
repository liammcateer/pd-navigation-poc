import { Cart } from '@/components/Cart';

export default function PropertyDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Cart />
    </>
  );
}
