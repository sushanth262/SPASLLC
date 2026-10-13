type IconProps = {
  className?: string;
};

export function ArrowUpRight({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LogoMark({ className = "size-10" }: IconProps) {
  return (
    <svg className={`logo-mark ${className}`} viewBox="0 0 44 44" fill="none" role="img" aria-label="SPAS monogram">
      <rect width="44" height="44" rx="14" fill="#183335" />
      <path
        d="M25.8 11.5h-6.2c-4 0-6.5 2.1-6.5 5 0 3 2.4 4.3 6.3 4.9l4.2.7c3.7.6 5.8 2 5.8 4.9 0 3.3-2.8 5.5-7.2 5.5h-7.4"
        stroke="#F7F7F1"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M22 31.8V12.2h5.1c3.7 0 6.1 2.3 6.1 5.6 0 3.4-2.4 5.7-6.1 5.7H22"
        stroke="#CAF05B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
