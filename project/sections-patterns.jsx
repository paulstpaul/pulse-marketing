// sections-patterns.jsx — Sample healthcare screens

const PatientChartScreen = () => (
  <div className="screen">
    <div className="screen-chrome">
      <div className="screen-tabs">
        <span className="screen-tab is-active">Overview</span>
        <span className="screen-tab">Orders</span>
        <span className="screen-tab">Medications</span>
        <span className="screen-tab">Notes</span>
        <span className="screen-tab">Imaging</span>
      </div>
      <div className="screen-actions">
        <Btn variant="ghost" size="sm" icon="search">Find</Btn>
        <Btn variant="primary" size="sm" icon="plus">New order</Btn>
      </div>
    </div>
    <div className="screen-body">
      <aside className="screen-side">
        <div className="pcard pcard-tight">
          <div className="pcard-h">
            <div className="pcard-avatar">RM</div>
            <div className="pcard-meta">
              <div className="pcard-name">Reyes, Marisol A.</div>
              <div className="pcard-sub">F · 64 · MRN-04827163</div>
            </div>
          </div>
          <div className="pcard-grid">
            <div><div className="pcard-k">Bed</div><div className="pcard-v">4-A</div></div>
            <div><div className="pcard-k">Admit</div><div className="pcard-v mono">04-28</div></div>
            <div><div className="pcard-k">LOS</div><div className="pcard-v">6 d</div></div>
            <div><div className="pcard-k">Code</div><div className="pcard-v">Full</div></div>
          </div>
        </div>
        <div className="side-list">
          <div className="side-list-h">Allergies</div>
          <div className="side-row"><span className="bdg bdg-critical bdg-xs">Severe</span> Penicillin</div>
          <div className="side-row"><span className="bdg bdg-warning bdg-xs">Mild</span> Latex</div>
        </div>
        <div className="side-list">
          <div className="side-list-h">Problem list</div>
          <div className="side-row">CHF, NYHA II</div>
          <div className="side-row">Atrial fibrillation</div>
          <div className="side-row">Type 2 diabetes</div>
          <div className="side-row">Hypertension</div>
        </div>
      </aside>
      <main className="screen-main">
        <div className="vitals-row">
          <VitalCard name="Heart rate" value="72" unit="bpm" color={PULSE_TOKENS.vitals.hr}
            trend={[12,14,16,18,15,20,22,18,16,18,20,22,24,20,22]} />
          <VitalCard name="SpO₂" value="98" unit="%" color={PULSE_TOKENS.vitals.spo2}
            trend={[18,20,22,21,22,23,22,23,24,23,24,25,24,25,26]} />
          <VitalCard name="BP" value="118/76" unit="mmHg" color={PULSE_TOKENS.vitals.bp}
            trend={[14,16,18,16,17,15,18,19,17,18,16,17,18,16,18]} />
          <VitalCard name="Temp" value="37.0" unit="°C" color={PULSE_TOKENS.vitals.temp}
            trend={[10,11,12,11,12,13,13,14,13,14,15,14,15,14,15]} />
        </div>

        <div className="panel">
          <div className="panel-h">
            <h4>Active medications</h4>
            <Btn variant="ghost" size="sm" iconRight="chev">View all</Btn>
          </div>
          <div className="med-table">
            <div className="med-row med-head">
              <div>Medication</div><div>Dose</div><div>Route</div><div>Schedule</div><div>Last given</div><div></div>
            </div>
            {[
              ['Metoprolol tartrate', '25 mg', 'PO', 'BID', '08:00', 'success'],
              ['Furosemide',          '40 mg', 'IV', 'Daily', '09:15', 'success'],
              ['Apixaban',            '5 mg',  'PO', 'BID',   '08:00', 'success'],
              ['Insulin glargine',    '18 u',  'SC', 'qHS',   '21:00', 'warning'],
              ['Acetaminophen',       '650 mg','PO', 'PRN',   '—',     'neutral'],
            ].map(([m, d, r, s, t, tone]) => (
              <div className="med-row" key={m}>
                <div className="med-name"><PulseIcon name="pill" size={14} /> {m}</div>
                <div className="mono">{d}</div>
                <div>{r}</div>
                <div>{s}</div>
                <div className="mono">{t}</div>
                <div><Badge tone={tone} dot>{tone === 'success' ? 'Given' : tone === 'warning' ? 'Due 21:00' : 'PRN'}</Badge></div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-h">
            <h4>Recent notes</h4>
            <Btn variant="tertiary" size="sm" icon="plus">Add note</Btn>
          </div>
          <div className="note-list">
            <div className="note">
              <div className="note-h">
                <span className="note-author">Dr. A. Okafor</span>
                <span className="note-meta mono">Today 07:42 · Progress note</span>
              </div>
              <p>Diuresis adequate overnight. Net negative 1.2L. HR controlled on metoprolol; will continue current regimen and reassess in AM rounds.</p>
            </div>
            <div className="note">
              <div className="note-h">
                <span className="note-author">RN J. Mehta</span>
                <span className="note-meta mono">Yesterday 22:10 · Nursing</span>
              </div>
              <p>Patient ambulated 2× hallway with assist. Tolerated PO intake. Reports pain 2/10 at incision site.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

const ConsumerScreen = () => (
  <div className="phone">
    <div className="phone-notch"/>
    <div className="phone-screen">
      <div className="phone-statusbar">
        <span className="mono">9:41</span>
        <span className="phone-status-icons">
          <PulseIcon name="activity" size={12} stroke={2}/>
          <PulseIcon name="dot" size={10}/>
        </span>
      </div>
      <div className="phone-body">
        <div className="phone-greet">
          <div className="phone-eyebrow">Tuesday · May 5</div>
          <h3 className="phone-h">Good morning, Marisol</h3>
        </div>
        <div className="phone-card phone-hero">
          <div className="phone-hero-h">
            <span className="phone-hero-dot"/>
            <span>Today's reading</span>
          </div>
          <div className="phone-hero-val">
            <span className="phone-num">118<span className="phone-slash">/</span>76</span>
            <span className="phone-unit">mmHg</span>
          </div>
          <div className="phone-hero-meta">
            <span>In range</span>
            <span className="mono">7:14 AM</span>
          </div>
          <svg className="phone-hero-trend" viewBox="0 0 200 50" preserveAspectRatio="none">
            <polyline fill="none" stroke="currentColor" strokeWidth="1.5"
              points="0,30 14,28 28,32 42,30 56,26 70,28 84,24 98,22 112,26 126,20 140,22 154,18 168,20 182,16 200,18"/>
          </svg>
        </div>
        <div className="phone-row">
          <div className="phone-tile">
            <PulseIcon name="heart" size={18}/>
            <div className="phone-tile-num">72 <span>bpm</span></div>
            <div className="phone-tile-lbl">Resting HR</div>
          </div>
          <div className="phone-tile">
            <PulseIcon name="drop" size={18}/>
            <div className="phone-tile-num">112 <span>mg/dL</span></div>
            <div className="phone-tile-lbl">Glucose</div>
          </div>
        </div>
        <div className="phone-card">
          <div className="phone-list-h">Today's medications</div>
          <div className="phone-med">
            <span className="phone-med-time mono">08:00</span>
            <div className="phone-med-info">
              <div className="phone-med-name">Metoprolol</div>
              <div className="phone-med-dose">25 mg · with food</div>
            </div>
            <span className="bdg bdg-success bdg-xs"><PulseIcon name="check" size={11} stroke={2.5}/></span>
          </div>
          <div className="phone-med">
            <span className="phone-med-time mono">21:00</span>
            <div className="phone-med-info">
              <div className="phone-med-name">Apixaban</div>
              <div className="phone-med-dose">5 mg</div>
            </div>
            <span className="bdg bdg-neutral bdg-xs">Later</span>
          </div>
        </div>
        <button className="phone-btn">Log a reading</button>
      </div>
      <div className="phone-tabbar">
        <span className="phone-tab is-active"><PulseIcon name="activity" size={20}/>Today</span>
        <span className="phone-tab"><PulseIcon name="chart" size={20}/>Trends</span>
        <span className="phone-tab"><PulseIcon name="pill" size={20}/>Meds</span>
        <span className="phone-tab"><PulseIcon name="user" size={20}/>Profile</span>
      </div>
    </div>
  </div>
);

const PatternsSection = () => (
  <Section id="patterns" num="05" kicker="Patterns"
    title="Sample applications"
    lede="Two assemblies showing how the system composes — a clinician-facing patient chart (dense, multi-region) and a patient-facing companion app (single column, generous touch targets).">

    <SubHead eyebrow="Clinician" title="Patient overview"
      note="Side rail for identity & problem list; main column for vitals, active medications, and notes. Designed for 1280px+ at the bedside workstation." />
    <PatientChartScreen />

    <SubHead eyebrow="Patient" title="Companion app — Today view"
      note="Same tokens, same type, larger touch targets and simpler hierarchy. The companion app reuses the brand ramp without alarm-state colors." />
    <div className="phone-stage">
      <ConsumerScreen />
    </div>
  </Section>
);

Object.assign(window, { PatternsSection });
