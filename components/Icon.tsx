import type { IconName } from "@/lib/data";

const paths: Record<IconName, string> = {
  people: '<path d="M9 7a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM2 21a7 7 0 0114 0M16 4a3.5 3.5 0 010 7M22 21a7 7 0 00-5-6.7"/>',
  recruit: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/>',
  onboard: '<path d="M12 2a7 7 0 00-4 12.7V17a2 2 0 002 2h4a2 2 0 002-2v-2.3A7 7 0 0012 2zM9 22h6"/>',
  leave: '<path d="M8 2v4M16 2v4M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"/><path d="M9 14l2 2 4-4"/>',
  attendance: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  payroll: '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9v6M18 9v6"/>',
  perf: '<path d="M3 17l6-6 4 4 8-8M21 7v6h-6"/>',
  learn: '<path d="M22 10L12 4 2 10l10 6 10-6zM6 12v5c0 1 3 3 6 3s6-2 6-3v-5"/>',
  analytics: '<path d="M3 3v18h18M8 17V9M13 17V5M18 17v-6"/>',
  workflow: '<rect x="3" y="3" width="6" height="6" rx="1.5"/><rect x="15" y="15" width="6" height="6" rx="1.5"/><path d="M9 6h6a3 3 0 013 3v3"/>',
  docs: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  send: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
  bolt: '<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>',
  trend: '<path d="M3 17l6-6 4 4 8-8M21 7v6h-6"/>',
  chat: '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8.1 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7A2 2 0 0122 16.9z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
};

export default function Icon({
  name,
  size,
  stroke = 2,
  className,
}: {
  name: IconName;
  size?: number;
  stroke?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: paths[name] }}
    />
  );
}
