'use client';
export interface SubPageHeaderProps {
  title: string;
  subtitle?: string;
}

export const SubPageHeader: React.FC<SubPageHeaderProps> = ({
  title,
  subtitle,
}) => {
  const handleBack = () => {
    if (window.history.state.fromPropertyDetails) {
      window.history.back();
    } else {
      // If there's no history to go back to, just remove the subPage parameter
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.delete('subPage');
      window.history.replaceState({}, '', `?${searchParams.toString()}`);
    }
  };

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
      <button onClick={handleBack}>Back</button>
      <div>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{title}</p>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};
