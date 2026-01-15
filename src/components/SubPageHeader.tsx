'use client';
import { useRouter } from 'next/navigation';

interface SubPageHeaderProps {
  title: string;
  subtitle?: string;
}

export const SubPageHeader: React.FC<SubPageHeaderProps> = ({
  title,
  subtitle,
}) => {
  const router = useRouter();

  return (
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
      <button onClick={() => router.back()}>Back</button>
      <div>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{title}</p>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};
