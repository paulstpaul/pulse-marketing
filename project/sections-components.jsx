// sections-components.jsx — Buttons, Inputs, Cards, Badges

const { useState: useState_c } = React;

// ── BUTTONS ─────────────────────────────────────────────────────────────────

const Btn = ({ variant = 'primary', size = 'md', icon, iconRight, children, danger, disabled }) => {
  const cls = ['btn', `btn-${variant}`, `btn-${size}`,
    danger && 'btn-danger', disabled && 'is-disabled'].filter(Boolean).join(' ');
  return (
    <button className={cls} disabled={disabled}>
      {icon && <PulseIcon name={icon} size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
      <span>{children}</span>
      {iconRight && <PulseIcon name={iconRight} size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
    </button>
  );
};

const ButtonsBlock = () => (
  <>
    <SubHead eyebrow="Components" title="Buttons" note="Primary for the single most important action per surface. Secondary, tertiary and ghost for lower hierarchy. Danger reserved for destructive or alarm-acknowledge actions." />
    <div className="comp-block">
      <div className="comp-row-label">Variants</div>
      <div className="comp-row">
        <Btn variant="primary">Primary</Btn>
        <Btn variant="secondary">Secondary</Btn>
        <Btn variant="tertiary">Tertiary</Btn>
        <Btn variant="ghost">Ghost</Btn>
        <Btn variant="primary" danger>Acknowledge alarm</Btn>
      </div>
      <div className="comp-row-label">Sizes</div>
      <div className="comp-row">
        <Btn variant="primary" size="sm">Small</Btn>
        <Btn variant="primary" size="md">Medium</Btn>
        <Btn variant="primary" size="lg">Large</Btn>
      </div>
      <div className="comp-row-label">With icons</div>
      <div className="comp-row">
        <Btn variant="primary" icon="plus">Add patient</Btn>
        <Btn variant="secondary" icon="download">Export</Btn>
        <Btn variant="tertiary" iconRight="chev">Open chart</Btn>
        <Btn variant="ghost" icon="filter">Filter</Btn>
      </div>
      <div className="comp-row-label">States</div>
      <div className="comp-row">
        <Btn variant="primary">Default</Btn>
        <Btn variant="primary" disabled>Disabled</Btn>
        <Btn variant="secondary" disabled>Disabled</Btn>
      </div>
    </div>
  </>
);

// ── INPUTS ──────────────────────────────────────────────────────────────────

const Field = ({ label, hint, error, children, required, unit }) => (
  <label className={`field ${error ? 'is-error' : ''}`}>
    <div className="field-lbl">
      <span>{label}{required && <span className="req">*</span>}</span>
      {unit && <span className="field-unit">{unit}</span>}
    </div>
    {children}
    {(hint || error) && (
      <div className="field-hint">{error || hint}</div>
    )}
  </label>
);

const InputsBlock = () => {
  const [hr, setHr] = useState_c('72');
  const [med, setMed] = useState_c('');
  return (
    <>
      <SubHead eyebrow="Components" title="Form inputs"
        note="Tabular numerics on numeric fields. Units always rendered as right-aligned suffix, never as placeholder text. Errors persist after blur — never blocking entry." />
      <div className="comp-block">
        <div className="form-grid">
          <Field label="Patient name" required hint="Last, First MI">
            <input className="input" placeholder="Doe, Jane M" defaultValue="Reyes, Marisol A"/>
          </Field>
          <Field label="MRN">
            <input className="input mono" defaultValue="MRN-04827163"/>
          </Field>
          <Field label="Heart rate" unit="bpm" hint="Manual override; auto reads from monitor">
            <input className="input mono" value={hr} onChange={(e)=>setHr(e.target.value)} />
          </Field>
          <Field label="SpO₂" unit="%" error={false}>
            <input className="input mono" defaultValue="98"/>
          </Field>
          <Field label="Temperature" unit="°C" error="Out of physiologic range">
            <input className="input mono" defaultValue="42.6"/>
          </Field>
          <Field label="Allergy" hint="Type to search">
            <div className="input-affix">
              <PulseIcon name="search" size={16} />
              <input className="input bare" placeholder="None known" value={med} onChange={(e)=>setMed(e.target.value)} />
            </div>
          </Field>
          <Field label="Code status">
            <div className="input-affix">
              <select className="input bare select" defaultValue="full">
                <option value="full">Full code</option>
                <option value="dnr">DNR</option>
                <option value="dni">DNI</option>
              </select>
              <PulseIcon name="chevd" size={16} />
            </div>
          </Field>
          <Field label="Admit date">
            <input className="input mono" type="text" defaultValue="2026-04-28"/>
          </Field>
        </div>
        <div className="comp-row-label">Toggles & checks</div>
        <div className="toggles-grid">
          <Toggle label="Mute audible alarms" defaultOn={false}/>
          <Toggle label="Show waveform grid" defaultOn={true}/>
          <Check label="Patient has consented" defaultOn={true}/>
          <Check label="NPO since midnight" defaultOn={false}/>
        </div>
        <div className="comp-row-label">Priority</div>
        <div className="comp-row" style={{ alignItems: 'center', gap: 20 }}>
          <Radio label="Stat" name="prio"/>
          <Radio label="Routine" name="prio" defaultOn/>
          <Radio label="Scheduled" name="prio"/>
        </div>
      </div>
    </>
  );
};

const Toggle = ({ label, defaultOn }) => {
  const [on, setOn] = useState_c(!!defaultOn);
  return (
    <button className={`tgl ${on ? 'is-on' : ''}`} onClick={()=>setOn(!on)}>
      <span className="tgl-track"><span className="tgl-knob"/></span>
      <span className="tgl-lbl">{label}</span>
    </button>
  );
};
const Check = ({ label, defaultOn }) => {
  const [on, setOn] = useState_c(!!defaultOn);
  return (
    <button className={`chk ${on ? 'is-on' : ''}`} onClick={()=>setOn(!on)}>
      <span className="chk-box">{on && <PulseIcon name="check" size={12} stroke={2.5}/>}</span>
      <span>{label}</span>
    </button>
  );
};
const Radio = ({ label, name, defaultOn }) => {
  const [on, setOn] = useState_c(!!defaultOn);
  return (
    <label className={`rdo ${on ? 'is-on' : ''}`}>
      <input type="radio" name={name} checked={on} onChange={()=>setOn(true)} />
      <span className="rdo-dot"/>
      <span>{label}</span>
    </label>
  );
};

// ── BADGES ──────────────────────────────────────────────────────────────────

const Badge = ({ tone = 'neutral', dot, children }) => (
  <span className={`bdg bdg-${tone}`}>
    {dot && <span className="bdg-dot"/>}
    {children}
  </span>
);

const BadgesBlock = () => (
  <>
    <SubHead eyebrow="Components" title="Badges & status pills"
      note="Two registers: tonal (in-flow labels) and solid (alarms). Always pair with text or an icon — the dot is decorative, not the meaning." />
    <div className="comp-block">
      <div className="comp-row-label">Tonal</div>
      <div className="comp-row" style={{ alignItems: 'center' }}>
        <Badge tone="neutral" dot>Discharged</Badge>
        <Badge tone="info" dot>Admitted</Badge>
        <Badge tone="success" dot>Stable</Badge>
        <Badge tone="warning" dot>Watch</Badge>
        <Badge tone="critical" dot>Critical</Badge>
        <Badge tone="brand" dot>Pre-op</Badge>
      </div>
      <div className="comp-row-label">Solid (alarm strip)</div>
      <div className="comp-row" style={{ alignItems: 'center' }}>
        <span className="alarm alarm-critical">
          <PulseIcon name="warn" size={14} stroke={2.25}/>
          HR LOW · 38 bpm · Bed 4-A
        </span>
        <span className="alarm alarm-warning">
          <PulseIcon name="warn" size={14} stroke={2.25}/>
          SpO₂ 89% · Bed 6-C
        </span>
        <span className="alarm alarm-info">
          <PulseIcon name="info" size={14} stroke={2.25}/>
          New order · Reyes, M
        </span>
      </div>
    </div>
  </>
);

// ── CARDS ───────────────────────────────────────────────────────────────────

const VitalCard = ({ name, value, unit, color, trend = [] }) => (
  <div className="vcard">
    <div className="vcard-h">
      <span className="vcard-dot" style={{ background: color }}/>
      <span className="vcard-name">{name}</span>
    </div>
    <div className="vcard-val">
      <span className="vcard-num">{value}</span>
      <span className="vcard-unit">{unit}</span>
    </div>
    <svg className="vcard-trend" viewBox="0 0 100 30" preserveAspectRatio="none">
      <polyline points={trend.map((y, i) => `${i * (100 / (trend.length - 1))},${30 - y}`).join(' ')}
        fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const PatientCard = () => (
  <div className="pcard">
    <div className="pcard-h">
      <div className="pcard-avatar">RM</div>
      <div className="pcard-meta">
        <div className="pcard-name">Reyes, Marisol A.</div>
        <div className="pcard-sub">F · 64 · MRN-04827163</div>
      </div>
      <Badge tone="warning" dot>Watch</Badge>
    </div>
    <div className="pcard-grid">
      <div><div className="pcard-k">Bed</div><div className="pcard-v">4-A</div></div>
      <div><div className="pcard-k">Admitting</div><div className="pcard-v">Dr. Okafor</div></div>
      <div><div className="pcard-k">DOA</div><div className="pcard-v mono">2026-04-28</div></div>
      <div><div className="pcard-k">Code</div><div className="pcard-v">Full</div></div>
    </div>
    <div className="pcard-foot">
      <span className="pcard-tag">CHF</span>
      <span className="pcard-tag">A-fib</span>
      <span className="pcard-tag">Post-op day 2</span>
    </div>
  </div>
);

const CardsBlock = () => (
  <>
    <SubHead eyebrow="Components" title="Cards"
      note="Two patterns: vitals tiles (numeric, single-purpose, monospaced) and patient summary cards (multi-field, scannable). Both use 1px hairlines on canvas; reserve elevation for floating panels." />
    <div className="comp-block">
      <div className="vitals-row">
        <VitalCard name="Heart rate" value="72" unit="bpm" color={PULSE_TOKENS.vitals.hr}
          trend={[12,14,16,18,15,20,22,18,16,18,20,22,24,20,22]} />
        <VitalCard name="SpO₂" value="98" unit="%" color={PULSE_TOKENS.vitals.spo2}
          trend={[18,20,22,21,22,23,22,23,24,23,24,25,24,25,26]} />
        <VitalCard name="BP" value="118/76" unit="mmHg" color={PULSE_TOKENS.vitals.bp}
          trend={[14,16,18,16,17,15,18,19,17,18,16,17,18,16,18]} />
        <VitalCard name="Temp" value="37.0" unit="°C" color={PULSE_TOKENS.vitals.temp}
          trend={[10,11,12,11,12,13,13,14,13,14,15,14,15,14,15]} />
        <VitalCard name="Resp" value="16" unit="/min" color={PULSE_TOKENS.vitals.resp}
          trend={[8,10,12,10,12,14,12,14,12,14,12,14,12,14,12]} />
      </div>
      <div className="cards-row">
        <PatientCard />
        <PatientCard />
      </div>
    </div>
  </>
);

// ── ICON GRID ───────────────────────────────────────────────────────────────

const IconGrid = () => {
  const names = ['heart','pulse','drop','user','bell','gear','chart','plus','check','x',
                 'search','info','warn','pill','stetho','syringe','bed','activity',
                 'download','filter','chev','chevd','sun','moon'];
  return (
    <>
      <SubHead eyebrow="Components" title="Iconography"
        note="1.5px stroked, 24×24, currentColor. Optical balance over geometric perfection — strokes round to half-pixels at common sizes (16/20/24)." />
      <div className="icon-grid">
        {names.map(n => (
          <div className="icon-cell" key={n}>
            <PulseIcon name={n} size={24} />
            <code>{n}</code>
          </div>
        ))}
      </div>
    </>
  );
};

const ComponentsSection = () => (
  <Section id="components" num="04" kicker="Components"
    title="Core components"
    lede="The minimum vocabulary needed to assemble a clinical interface — buttons, form controls, status pills, cards, and the icon set. Each component has been tuned for the comfortable density target and 44px+ touch regions for bedside use.">
    <ButtonsBlock />
    <InputsBlock />
    <BadgesBlock />
    <CardsBlock />
    <IconGrid />
  </Section>
);

Object.assign(window, { ComponentsSection, Btn, Badge, VitalCard, PatientCard });
