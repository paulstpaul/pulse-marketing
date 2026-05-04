import React from "react";

interface PulseIconProps {
  name: string;
  size?: number;
  stroke?: number;
  className?: string;
  style?: React.CSSProperties;
}

const paths: Record<string, React.ReactNode> = {
  heart: <path d="M20.5 8.5c0 5.5-8.5 11-8.5 11s-8.5-5.5-8.5-11A4.5 4.5 0 0 1 12 6.4 4.5 4.5 0 0 1 20.5 8.5z" />,
  pulse: <polyline points="2,12 6,12 8,7 11,17 14,9 16,12 22,12" />,
  drop:  <path d="M12 3.5c4 5 6 8.5 6 11.5a6 6 0 0 1-12 0c0-3 2-6.5 6-11.5z" />,
  user:  (<><circle cx="12" cy="9" r="3.5" /><path d="M5 20c1-3.5 4-5 7-5s6 1.5 7 5" /></>),
  bell:  (<><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2H4.5L6 16z" /><path d="M10 20a2 2 0 0 0 4 0" /></>),
  gear:  (<><circle cx="12" cy="12" r="3" /><path d="M19.4 12c0-.5-.05-1-.13-1.5l1.7-1.3-2-3.4-2 .8a7.4 7.4 0 0 0-2.6-1.5L13.9 3h-3.8l-.5 2.1a7.4 7.4 0 0 0-2.6 1.5l-2-.8-2 3.4 1.7 1.3a7.6 7.6 0 0 0 0 3l-1.7 1.3 2 3.4 2-.8a7.4 7.4 0 0 0 2.6 1.5l.5 2.1h3.8l.5-2.1a7.4 7.4 0 0 0 2.6-1.5l2 .8 2-3.4-1.7-1.3c.08-.5.13-1 .13-1.5z" /></>),
  chart: (<><path d="M3 3v18h18" /><polyline points="7,15 11,11 14,14 20,7" /></>),
  chev:  <polyline points="9,6 15,12 9,18" />,
  chevd: <polyline points="6,9 12,15 18,9" />,
  plus:  (<><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>),
  check: <polyline points="4,12 10,18 20,6" />,
  x:     (<><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></>),
  search:(<><circle cx="11" cy="11" r="6.5" /><line x1="16" y1="16" x2="20" y2="20" /></>),
  info:  (<><circle cx="12" cy="12" r="9" /><line x1="12" y1="11" x2="12" y2="16.5" /><circle cx="12" cy="8" r=".75" fill="currentColor" stroke="none" /></>),
  warn:  (<><path d="M12 3l10 18H2z" /><line x1="12" y1="10" x2="12" y2="14.5" /><circle cx="12" cy="17.5" r=".75" fill="currentColor" stroke="none" /></>),
  pill:  (<><rect x="3" y="9" width="18" height="6" rx="3" /><line x1="12" y1="9" x2="12" y2="15" /></>),
  stetho:(<><path d="M5 4v5a4 4 0 0 0 8 0V4" /><path d="M9 13v3a4 4 0 0 0 8 0v-2" /><circle cx="17" cy="9" r="2" /></>),
  syringe:(<><path d="M14 4l6 6"/><path d="M16 6l-9 9-3 5 5-3 9-9z"/><line x1="9" y1="13" x2="11" y2="15"/></>),
  bed:   (<><path d="M3 18V8"/><path d="M3 12h14a4 4 0 0 1 4 4v2"/><path d="M3 18h18"/><circle cx="8" cy="11" r="2"/></>),
  activity:<polyline points="2,12 6,12 9,4 14,20 17,12 22,12"/>,
  moon:  <path d="M20 14a8 8 0 1 1-9-11 6 6 0 0 0 9 11z"/>,
  sun:   (<><circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="21"/><line x1="3" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="21" y2="12"/><line x1="5.6" y1="5.6" x2="7" y2="7"/><line x1="17" y1="17" x2="18.4" y2="18.4"/><line x1="5.6" y1="18.4" x2="7" y2="17"/><line x1="17" y1="7" x2="18.4" y2="5.6"/></>),
  download:(<><path d="M12 4v12"/><polyline points="6,11 12,17 18,11"/><line x1="4" y1="20" x2="20" y2="20"/></>),
  filter:<polygon points="3,5 21,5 14,13 14,20 10,18 10,13" />,
  shield:(<><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /></>),
  layers:(<><polygon points="12,2 2,7 12,12 22,7"/><polyline points="2,17 12,22 22,17"/><polyline points="2,12 12,17 22,12"/></>),
  lock:  (<><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>),
  monitor:(<><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>),
  cpu:   (<><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></>),
  zap:   <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>,
};

export default function PulseIcon({
  name,
  size = 20,
  stroke = 1.5,
  className,
  style,
}: PulseIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  );
}
