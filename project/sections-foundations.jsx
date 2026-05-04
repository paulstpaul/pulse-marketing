// sections-foundations.jsx — Color, Type, Spacing/Radii/Shadow sections

const { useState } = React;

// Shared section frame
const Section = ({ id, num, kicker, title, lede, children }) => (
  <section id={id} className="ds-section">
    <header className="ds-section-h">
      <div className="ds-kicker">
        <span className="ds-num">{num}</span>
        <span>{kicker}</span>
      </div>
      <h2 className="ds-h2">{title}</h2>
      {lede && <p className="ds-lede">{lede}</p>}
    </header>
    <div className="ds-section-body">{children}</div>
  </section>
);

const SubHead = ({ eyebrow, title, note }) => (
  <div className="ds-sub">
    {eyebrow && <div className="ds-eyebrow">{eyebrow}</div>}
    <h3 className="ds-h3">{title}</h3>
    {note && <p className="ds-note">{note}</p>}
  </div>
);

// ── COLOR ────────────────────────────────────────────────────────────────────

const Swatch = ({ name, value, big, dark }) => {
  const [copied, setCopied] = useState(false);
  const onClick = () => {
    navigator.clipboard?.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 900);
  };
  return (
    <button className="sw" onClick={onClick} style={{
      background: value,
      color: dark ? 'rgba(255,255,255,.85)' : 'rgba(15,26,43,.78)',
      height: big ? 120 : 72,
    }}>
      <div className="sw-name">{name}</div>
      <div className="sw-val">{copied ? 'copied' : value}</div>
    </button>
  );
};

const Ramp = ({ label, ramp, darkAt = 500 }) => (
  <div className="ramp">
    <div className="ramp-label">
      <span>{label}</span>
      <span className="ramp-meta">10 steps · 50–900</span>
    </div>
    <div className="ramp-row">
      {Object.entries(ramp).map(([k, v]) => (
        <Swatch key={k} name={k} value={v} dark={Number(k) >= darkAt} />
      ))}
    </div>
  </div>
);

const ColorSection = ({ accentRamp, accentName }) => (
  <Section id="color" num="01" kicker="Foundations"
    title="Color"
    lede="A cool, clinical palette anchored in deep navy. Blues carry hierarchy and brand; neutrals carry structure; status colors follow IEC 60601-1-8 alarm conventions for hardware-adjacent contexts.">

    <SubHead eyebrow="Brand ramp" title={`${accentName} — Primary`} note="Tap any swatch to copy its value." />
    <Ramp label="primary" ramp={accentRamp} />

    <SubHead eyebrow="Neutrals" title="Ink — surfaces, text, borders" note="Slightly cool-tinted neutrals to read clean against the blues." />
    <Ramp label="ink" ramp={PULSE_TOKENS.ink} darkAt={400} />

    <SubHead eyebrow="Semantic" title="Status & alarms"
      note="Critical / Warning / Success / Info. Pair color with an icon and label — never color alone." />
    <div className="status-grid">
      {[
        ['critical', 'Critical', 'High-priority alarm, requires immediate response.'],
        ['warning',  'Warning',  'Medium-priority — operator awareness needed.'],
        ['success',  'Stable',   'Within target range, no action.'],
        ['info',     'Info',     'Neutral system message or hint.'],
      ].map(([k, t, d]) => (
        <div className="status-card" key={k}>
          <div className="status-chip" style={{ background: PULSE_TOKENS.status[k] }}>
            <PulseIcon name={k === 'critical' || k === 'warning' ? 'warn' : k === 'success' ? 'check' : 'info'} size={16} stroke={2} />
          </div>
          <div className="status-meta">
            <div className="status-title">{t}</div>
            <div className="status-desc">{d}</div>
            <code className="status-code">{PULSE_TOKENS.status[k]}</code>
          </div>
        </div>
      ))}
    </div>

    <SubHead eyebrow="Vital signs" title="Per-channel waveform colors"
      note="Aligned with hardware monitor conventions (ECG green, SpO₂ blue, etc.). Use only for waveform / numeric vitals — do not repurpose for UI accents." />
    <div className="vitals-grid">
      {[
        ['hr',   'Heart rate',  'ECG'],
        ['spo2', 'SpO₂',        'Pulse oximetry'],
        ['bp',   'Blood pressure', 'NIBP / IBP'],
        ['temp', 'Temperature', 'Skin / core'],
        ['resp', 'Respiration', 'Resp rate'],
      ].map(([k, t, d]) => (
        <div className="vital-card" key={k}>
          <div className="vital-bar" style={{ background: PULSE_TOKENS.vitals[k] }} />
          <div className="vital-meta">
            <div className="vital-title">{t}</div>
            <div className="vital-desc">{d}</div>
            <code className="vital-code">{PULSE_TOKENS.vitals[k]}</code>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

// ── TYPE ─────────────────────────────────────────────────────────────────────

const TYPE_SCALE = [
  { name: 'Display',   size: 64, lh: 1.04, weight: 600, tracking: '-0.02em', use: 'Hero pages, marketing only' },
  { name: 'H1',        size: 44, lh: 1.10, weight: 600, tracking: '-0.018em', use: 'Page title' },
  { name: 'H2',        size: 32, lh: 1.15, weight: 600, tracking: '-0.014em', use: 'Section heading' },
  { name: 'H3',        size: 24, lh: 1.22, weight: 600, tracking: '-0.010em', use: 'Subsection' },
  { name: 'H4',        size: 18, lh: 1.30, weight: 600, tracking: '-0.005em', use: 'Card / form heading' },
  { name: 'Body L',    size: 17, lh: 1.55, weight: 400, tracking: '0',        use: 'Reading prose, patient-facing' },
  { name: 'Body',      size: 15, lh: 1.55, weight: 400, tracking: '0',        use: 'Default body text' },
  { name: 'Body S',    size: 13, lh: 1.50, weight: 400, tracking: '0',        use: 'Secondary metadata' },
  { name: 'Caption',   size: 12, lh: 1.40, weight: 500, tracking: '0.01em',   use: 'Labels, helper' },
  { name: 'Overline',  size: 11, lh: 1.30, weight: 600, tracking: '0.10em',   use: 'Eyebrows, all-caps' },
];

const SAMPLE = "The patient's resting heart rate stabilized at 72 bpm.";

const TypeSection = () => (
  <Section id="type" num="02" kicker="Foundations"
    title="Typography"
    lede="Inter Tight for UI — a geometric sans with tight x-height for dense data. JetBrains Mono for vitals readouts, dose codes, and tabular numerics where character widths must lock.">

    <SubHead eyebrow="Pairing" title="Inter Tight + JetBrains Mono" />
    <div className="font-pair">
      <div className="font-card">
        <div className="font-card-h">
          <div className="font-name" style={{ fontFamily: PULSE_TOKENS.type.family }}>Inter Tight</div>
          <code className="font-meta">Geometric sans · 400 / 500 / 600</code>
        </div>
        <div className="font-specimen" style={{ fontFamily: PULSE_TOKENS.type.family }}>
          <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1 }}>Aa</div>
          <div className="font-glyphs">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>0123456789 — () [] {'{}'} → ×</div>
        </div>
      </div>
      <div className="font-card">
        <div className="font-card-h">
          <div className="font-name" style={{ fontFamily: PULSE_TOKENS.type.mono }}>JetBrains Mono</div>
          <code className="font-meta">Monospace · 400 / 500 / 600</code>
        </div>
        <div className="font-specimen" style={{ fontFamily: PULSE_TOKENS.type.mono }}>
          <div style={{ fontSize: 96, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em' }}>72</div>
          <div className="font-glyphs">0123456789  bpm  mmHg<br/>SpO₂ 98%  Temp 37.0°C<br/>──────────────────────</div>
        </div>
      </div>
    </div>

    <SubHead eyebrow="Scale" title="10-step type ramp" note="Comfortable density. Min body 13px; min interactive label 12px." />
    <div className="type-table">
      <div className="type-row type-head">
        <div>Token</div><div>Size / Line</div><div>Weight</div><div>Sample</div><div>Use</div>
      </div>
      {TYPE_SCALE.map((t) => (
        <div className="type-row" key={t.name}>
          <div className="type-tok">{t.name}</div>
          <div className="type-meta">{t.size}/{Math.round(t.size*t.lh)}</div>
          <div className="type-meta">{t.weight}</div>
          <div className="type-sample" style={{
            fontSize: t.size, lineHeight: t.lh, fontWeight: t.weight,
            letterSpacing: t.tracking,
          }}>{SAMPLE}</div>
          <div className="type-use">{t.use}</div>
        </div>
      ))}
    </div>
  </Section>
);

// ── SPACING / RADIUS / SHADOW ───────────────────────────────────────────────

const SpacingSection = () => (
  <Section id="spacing" num="03" kicker="Foundations"
    title="Spacing, radii & elevation"
    lede="A 4-pt base scale with denser low-end steps for tight data alignments. Radii stay modest — clinical software shouldn't read as playful. Elevation is reserved for floating layers; on-canvas surfaces use 1px hairlines instead.">

    <SubHead eyebrow="Scale" title="Spacing — 4-pt base" />
    <div className="space-row">
      {Object.entries(PULSE_TOKENS.space).filter(([k]) => Number(k) > 0).map(([k, v]) => (
        <div className="space-cell" key={k}>
          <div className="space-bar" style={{ width: v, height: v }} />
          <code className="space-tok">space-{k}</code>
          <code className="space-val">{v}px</code>
        </div>
      ))}
    </div>

    <SubHead eyebrow="Corners" title="Radii" note="No radius above 16px on UI surfaces (pills excepted)." />
    <div className="radius-row">
      {Object.entries(PULSE_TOKENS.radius).map(([k, v]) => (
        <div className="radius-cell" key={k}>
          <div className="radius-box" style={{ borderRadius: v === 999 ? 999 : v }} />
          <code className="radius-tok">radius-{k}</code>
          <code className="radius-val">{v === 999 ? '∞' : `${v}px`}</code>
        </div>
      ))}
    </div>

    <SubHead eyebrow="Elevation" title="Shadows"
      note="Use sparingly. Hairlines and tonal fills carry most hierarchy in clinical contexts." />
    <div className="shadow-row">
      {Object.entries(PULSE_TOKENS.shadow).map(([k, v]) => (
        <div className="shadow-cell" key={k}>
          <div className="shadow-box" style={{ boxShadow: v }} />
          <code className="shadow-tok">shadow-{k}</code>
        </div>
      ))}
    </div>
  </Section>
);

Object.assign(window, { Section, SubHead, ColorSection, TypeSection, SpacingSection });
