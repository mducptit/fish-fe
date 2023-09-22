export const ErrorMessage = ({ error, className = 'text-[11px]' }) => {
  return <p className={`text-[#f02849] font-medium ${className}`}>{error}</p>;
};
