import Link from "next/link";
import Logo from "@/components/shared/Logo";
import PulseIcon from "@/components/shared/PulseIcon";

const footerNav = {
  System: [
    { label: "Color", href: "#color" },
    { label: "Typography", href: "#typography" },
    { label: "Spacing", href: "#spacing" },
    { label: "Components", href: "#components" },
    { label: "Patterns", href: "#patterns" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Figma file", href: "#" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Contributing", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-ink-900 text-ink-400 border-t border-ink-800"
      aria-label="Site footer"
    >
      <div className="section-container py-16 lg:py-20">
        <div className="grid md:grid-cols-[240px_1fr] gap-12 lg:gap-16 mb-12 pb-12 border-b border-ink-800">
          {/* Brand block */}
          <div>
            <Link href="/" aria-label="Pulse home">
              <div className="flex items-center gap-2.5 font-semibold mb-4">
                <span className="w-7 h-7 rounded-md bg-brand-700 text-brand-50 grid place-items-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="2,12 6,12 8,7 11,17 14,9 16,12 22,12" />
                  </svg>
                </span>
                <span className="text-[15px] text-ink-100 font-semibold">Pulse</span>
              </div>
            </Link>
            <p className="text-[13px] leading-[1.65] text-pretty max-w-[240px]">
              A design system for clinical software and connected devices.
              Calm, legible, and engineered for accuracy under fatigue.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-md bg-ink-800 text-ink-500 hover:text-ink-200 hover:bg-ink-700 grid place-items-center transition-colors"
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerNav).map(([group, links]) => (
              <div key={group}>
                <h3 className="text-[11px] font-semibold text-ink-500 uppercase tracking-[0.10em] mb-4 font-mono">
                  {group}
                </h3>
                <ul className="space-y-3" role="list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-ink-500 hover:text-ink-200 transition-colors"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[12px]">
          <p className="text-ink-600">
            © 2026 Pulse Design System. Built for original medical-device contexts.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-ink-600 hover:text-ink-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-ink-600 hover:text-ink-400 transition-colors">
              Terms
            </a>
            <span className="font-mono text-ink-700">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
