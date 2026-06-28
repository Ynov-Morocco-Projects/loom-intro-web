export default function LoomMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <defs>
        <linearGradient id="loomGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9A3CFF" />
          <stop offset="1" stopColor="#4F6BFF" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill="url(#loomGrad)" />
      <g fill="none" stroke="#fff" strokeWidth="1.7" opacity="0.95" strokeLinecap="round">
        <ellipse cx="20" cy="20" rx="14" ry="6.4" />
        <ellipse cx="20" cy="20" rx="14" ry="6.4" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="14" ry="6.4" transform="rotate(120 20 20)" />
        <circle cx="20" cy="20" r="3" fill="#fff" stroke="none" />
      </g>
    </svg>
  );
}
