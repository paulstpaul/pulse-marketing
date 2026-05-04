import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: { mark: 20, text: "text-[13px]" },
    md: { mark: 26, text: "text-[15px]" },
    lg: { mark: 32, text: "text-[18px]" },
  };

  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-2.5 font-semibold tracking-[-0.01em]", className)}>
      <span
        className="rounded-md bg-brand-700 text-brand-50 grid place-items-center flex-shrink-0"
        style={{ width: s.mark, height: s.mark }}
      >
        <svg
          width={Math.round(s.mark * 0.54)}
          height={Math.round(s.mark * 0.54)}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="2,12 6,12 8,7 11,17 14,9 16,12 22,12" />
        </svg>
      </span>
      <span className={cn(s.text)}>
        <b className="font-semibold text-ink-800">Pulse</b>
        <span className="text-ink-400 font-normal ml-1.5 hidden sm:inline">
          Design System
        </span>
      </span>
    </div>
  );
}
