import { useEffect, useState } from 'react';
import DraggableDialog from '../components/DraggableDialog';
import { useBuildStore } from '../store/useBuildStore';
import {
  CombatGameData,
  loadCombatGameData,
} from './combatMechanicsRegistry';
import { runCombatSimulation } from './combatSimulatorEngine';
import {
  CURRENT_BUILD_ID,
  runBuildComparison,
} from './buildComparatorEngine';
import {
  DEFAULT_SIMULATION_CONFIG,
  FormulaTrace,
  SimulationConfig,
  SimulationResult,
  BuildComparisonReport,
  TargetKind,
} from './types';
import './simulator.css';

interface CombatSimulatorDialogProps {
  onClose: () => void;
}

type DialogTab = 'sim' | 'compare' | 'settings';

export default function CombatSimulatorDialog({ onClose }: CombatSimulatorDialogProps) {
  const [activeTab, setActiveTab] = useState<DialogTab>('sim');
  const [config, setConfig] = useState<SimulationConfig>(DEFAULT_SIMULATION_CONFIG);
  const [gameData, setGameData] = useState<CombatGameData | null>(null);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const [simResult, setSimResult] = useState<SimulationResult | null>(null);
  const [compareReport, setCompareReport] = useState<BuildComparisonReport | null>(null);
  const [selectedTrace, setSelectedTrace] = useState<FormulaTrace | null>(null);
  const [showCombatLog, setShowCombatLog] = useState<boolean>(false);
  const [showUnverifiedList, setShowUnverifiedList] = useState<boolean>(false);

  // Subscribe to full currentState & saved buildPlans
  const currentState = useBuildStore();
  const buildPlans = useBuildStore((s) => s.buildPlans);

  // Lazy-load game data once
  useEffect(() => {
    let mounted = true;
    loadCombatGameData()
      .then((data) => {
        if (mounted) {
          setGameData(data);
          setIsLoadingData(false);
          // Initial auto-run
          const initialSim = runCombatSimulation(currentState, data, config);
          setSimResult(initialSim);
          if (initialSim.rows[0]?.formulaTraces[0]) {
            setSelectedTrace(initialSim.rows[0].formulaTraces[0]);
          }
        }
      })
      .catch((err) => {
        console.error('Failed to load combat game data:', err);
        if (mounted) setIsLoadingData(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const handleRunSim = () => {
    if (!gameData) return;
    setIsSimulating(true);
    try {
      const res = runCombatSimulation(currentState, gameData, config);
      setSimResult(res);
      if (res.rows[0]?.formulaTraces[0]) {
        setSelectedTrace(res.rows[0].formulaTraces[0]);
      }
    } finally {
      setIsSimulating(false);
    }
  };

  const handleRunCompare = () => {
    if (!gameData) return;
    setIsSimulating(true);
    try {
      const rep = runBuildComparison(buildPlans, currentState, gameData, { config });
      setCompareReport(rep);
    } finally {
      setIsSimulating(false);
    }
  };

  // Re-run comparator when switching to compare tab if not generated yet
  useEffect(() => {
    if (activeTab === 'compare' && !compareReport && gameData) {
      handleRunCompare();
    }
  }, [activeTab, gameData]);

  const updateConfig = (patch: Partial<SimulationConfig>) => {
    setConfig((prev) => ({ ...prev, ...patch }));
  };

  const formatNumber = (num: number, digits = 1): string => {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });
  };

  return (
    <DraggableDialog
      title="⚡ 5-Minute Combat Simulator & Multi-Build Comparator"
      onClose={onClose}
      resizable={true}
      initialSize={{ w: 1040, h: 720 }}
      minSize={{ w: 760, h: 500 }}
      className="combat-sim-dialog"
    >
      <div className="combat-sim__top-nav">
        <div className="combat-sim__tabs">
          <button
            type="button"
            className={`combat-sim__tab-btn${activeTab === 'sim' ? ' combat-sim__tab-btn--active' : ''}`}
            onClick={() => setActiveTab('sim')}
          >
            📊 5-Min Simulation
          </button>
          <button
            type="button"
            className={`combat-sim__tab-btn${activeTab === 'compare' ? ' combat-sim__tab-btn--active' : ''}`}
            onClick={() => setActiveTab('compare')}
          >
            ⚔️ Multi-Build Comparator ({buildPlans.length + 1})
          </button>
          <button
            type="button"
            className={`combat-sim__tab-btn${activeTab === 'settings' ? ' combat-sim__tab-btn--active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            ⚙️ Simulator Settings
          </button>
        </div>

        <div className="combat-sim__controls">
          <div className="combat-sim__toggles">
            <label className="combat-sim__toggle-label" title="Enable/Disable Ultimate Skill in Rotation">
              <input
                type="checkbox"
                checked={config.useUltimate}
                onChange={(e) => {
                  updateConfig({ useUltimate: e.target.checked });
                }}
              />
              Ultimate
            </label>
            <label className="combat-sim__toggle-label" title="Enable/Disable Imagine 1 in Rotation">
              <input
                type="checkbox"
                checked={config.useImagine1}
                onChange={(e) => {
                  updateConfig({ useImagine1: e.target.checked });
                }}
              />
              Imagine 1
            </label>
            <label className="combat-sim__toggle-label" title="Enable/Disable Imagine 2 in Rotation">
              <input
                type="checkbox"
                checked={config.useImagine2}
                onChange={(e) => {
                  updateConfig({ useImagine2: e.target.checked });
                }}
              />
              Imagine 2
            </label>
            <label className="combat-sim__toggle-label" title="Include Food, Syrup, and Consumables Buffs">
              <input
                type="checkbox"
                checked={config.includeConsumables}
                onChange={(e) => {
                  updateConfig({ includeConsumables: e.target.checked });
                }}
              />
              Consumables
            </label>
          </div>

          {activeTab === 'sim' && (
            <button
              type="button"
              className="combat-sim__btn-run"
              onClick={handleRunSim}
              disabled={isLoadingData || isSimulating}
            >
              {isSimulating ? '⏳ Simulating...' : '▶ Run 5-Min Sim'}
            </button>
          )}

          {activeTab === 'compare' && (
            <button
              type="button"
              className="combat-sim__btn-run"
              onClick={handleRunCompare}
              disabled={isLoadingData || isSimulating}
            >
              {isSimulating ? '⏳ Comparing...' : '▶ Refresh Comparison'}
            </button>
          )}
        </div>
      </div>

      <div className="combat-sim__body">
        {isLoadingData && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
            Loading combat mechanics database...
          </div>
        )}

        {!isLoadingData && activeTab === 'sim' && simResult && (
          <>
            {/* Metric Cards */}
            <div className="combat-sim__cards-grid">
              <div className="combat-sim__card combat-sim__card--accent-dps">
                <span className="combat-sim__card-title">Effective DPS</span>
                <span className="combat-sim__card-value">{formatNumber(simResult.dps, 1)}</span>
                <span className="combat-sim__card-sub">
                  Total DMG: {formatNumber(simResult.totalDamage, 0)} (5 mins)
                </span>
              </div>

              <div className="combat-sim__card combat-sim__card--accent-burst">
                <span className="combat-sim__card-title">Peak Burst DPS</span>
                <span className="combat-sim__card-value">
                  {formatNumber(simResult.peakBurstDps, 1)}
                </span>
                <span className="combat-sim__card-sub">
                  Sliding {config.burstWindowSec}s burst window
                </span>
              </div>

              <div className="combat-sim__card">
                <span className="combat-sim__card-title">Baseline DPS</span>
                <span className="combat-sim__card-value">
                  {formatNumber(simResult.unbuffedBaselineDps, 1)}
                </span>
                <span className="combat-sim__card-sub">Zero dynamic procs / buffs</span>
              </div>

              <div className="combat-sim__card combat-sim__card--accent-hps">
                <span className="combat-sim__card-title">Effective HPS</span>
                <span className="combat-sim__card-value">{formatNumber(simResult.hps, 1)}</span>
                <span className="combat-sim__card-sub">
                  Total Heal: {formatNumber(simResult.totalHeal, 0)}
                </span>
              </div>

              <div className="combat-sim__card combat-sim__card--accent-buff">
                <span className="combat-sim__card-title">Avg Buff %</span>
                <span className="combat-sim__card-value">
                  +{formatNumber(simResult.averageBuffPct, 2)}%
                </span>
                <span className="combat-sim__card-sub">
                  Gain vs baseline: +
                  {formatNumber(
                    simResult.unbuffedBaselineDps > 0
                      ? ((simResult.dps - simResult.unbuffedBaselineDps) /
                          simResult.unbuffedBaselineDps) *
                          100
                      : 0,
                    1,
                  )}
                  %
                </span>
              </div>
            </div>

            {/* Zero-Hallucination Policy Verification Banner */}
            <div
              className={`combat-sim__verification-banner${
                simResult.verification.status === 'verified'
                  ? ' combat-sim__verification-banner--verified'
                  : ''
              }`}
            >
              <div>
                <strong>
                  {simResult.verification.status === 'verified'
                    ? '✓ All Combat Mechanics Verified'
                    : `⚠️ Provisional Mode (${simResult.verification.unverifiedItems.length} mechanics unverified)`}
                </strong>
                <div>
                  Strict Zero-Hallucination Rule: Unverified attributes / timings default to 0 with
                  no simulated guessing.
                </div>
                {showUnverifiedList && simResult.verification.unverifiedItems.length > 0 && (
                  <ul className="combat-sim__verification-details">
                    {simResult.verification.unverifiedItems.map((item, idx) => (
                      <li key={idx}>
                        <code>{item.key}</code>: {item.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {simResult.verification.unverifiedItems.length > 0 && (
                <button
                  type="button"
                  className="combat-sim__btn-inspect"
                  onClick={() => setShowUnverifiedList((v) => !v)}
                >
                  {showUnverifiedList ? 'Hide Details' : 'View Unverified Details'}
                </button>
              )}
            </div>

            {/* Skill Breakdown Table */}
            <div>
              <div className="combat-sim__section-title">
                <span>Skill Rotation Breakdown</span>
                <span style={{ fontSize: '11px', color: '#64748b' }}>
                  Click "Formula Audit" on any skill to inspect multiplier buckets
                </span>
              </div>
              <div className="combat-sim__table-container">
                <table className="combat-sim__table">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Category</th>
                      <th>Casts</th>
                      <th>Total DMG</th>
                      <th>DPS</th>
                      <th>DMG Share</th>
                      <th>Total Heal</th>
                      <th>HPS</th>
                      <th>Avg Buff %</th>
                      <th>Audit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {simResult.rows.map((row) => (
                      <tr key={row.actionId}>
                        <td>
                          <strong>{row.name}</strong>
                          {row.unverified.length > 0 && (
                            <span
                              title={row.unverified.map((u) => u.description).join('; ')}
                              style={{ color: '#f59e0b', marginLeft: '4px', cursor: 'help' }}
                            >
                              ⚠️
                            </span>
                          )}
                        </td>
                        <td>
                          <span
                            className={`combat-sim__table-badge combat-sim__table-badge--${row.sourceCategory}`}
                          >
                            {row.sourceCategory}
                          </span>
                        </td>
                        <td>{row.castCount}</td>
                        <td>{formatNumber(row.totalDamage, 0)}</td>
                        <td>{formatNumber(row.dps, 1)}</td>
                        <td>
                          <strong>{formatNumber(row.damageSharePct, 1)}%</strong>
                        </td>
                        <td>{formatNumber(row.totalHeal, 0)}</td>
                        <td>{formatNumber(row.hps, 1)}</td>
                        <td>+{formatNumber(row.avgBuffPct, 1)}%</td>
                        <td>
                          {row.formulaTraces.length > 0 && (
                            <button
                              type="button"
                              className="combat-sim__btn-inspect"
                              onClick={() => setSelectedTrace(row.formulaTraces[0])}
                            >
                              Formula Audit
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                    {simResult.rows.length === 0 && (
                      <tr>
                        <td colSpan={10} style={{ textAlign: 'center', padding: '20px' }}>
                          No skill actions were executed in this simulation.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Formula Audit Inspector Box */}
            {selectedTrace && (
              <div className="combat-sim__formula-box">
                <div className="combat-sim__formula-header">
                  <strong>
                    🔍 Formula Audit Inspector:{' '}
                    <span style={{ color: '#60a5fa' }}>{selectedTrace.rowLabel}</span> (
                    {selectedTrace.kind.toUpperCase()})
                  </strong>
                  <button
                    type="button"
                    className="combat-sim__btn-inspect"
                    onClick={() => setSelectedTrace(null)}
                  >
                    ✕ Close Audit
                  </button>
                </div>

                <div className="combat-sim__formula-equation">
                  Hit Value ({formatNumber(selectedTrace.hitValue, 1)}) = Base Hit (
                  {formatNumber(selectedTrace.baseHit, 1)}) × Boost (
                  {formatNumber(selectedTrace.boostBucket.value, 3)}) × Versatility (
                  {formatNumber(selectedTrace.versatilityBucket.value, 3)}) × Crit EV (
                  {formatNumber(selectedTrace.critEv.value, 3)}) × Luck EV (
                  {formatNumber(selectedTrace.luckEv.value, 3)}) × Def Mitigation (
                  {formatNumber(selectedTrace.defMitigation, 2)})
                </div>

                <div className="combat-sim__formula-buckets">
                  <div className="combat-sim__bucket-card">
                    <div className="combat-sim__bucket-title">1. Base Hit (Atk × Multiplier + Flat)</div>
                    <div>Active Stat: {selectedTrace.activeAtkStat.toUpperCase()} = {formatNumber(selectedTrace.activeAtk, 0)}</div>
                    <div>Skill Multiplier: {selectedTrace.skillMultiplierPct}%</div>
                    <div>Skill Flat Bonus: {selectedTrace.skillFlat}</div>
                    <div>Base Hit: <strong>{formatNumber(selectedTrace.baseHit, 1)}</strong></div>
                  </div>

                  <div className="combat-sim__bucket-card">
                    <div className="combat-sim__bucket-title">
                      2. Boost Multiplier ({formatNumber(selectedTrace.boostBucket.value, 3)}x)
                    </div>
                    {selectedTrace.boostBucket.components.map((c, i) => (
                      <div key={i} style={{ color: '#cbd5e1' }}>• {c}</div>
                    ))}
                  </div>

                  <div className="combat-sim__bucket-card">
                    <div className="combat-sim__bucket-title">
                      3. Versatility Multiplier ({formatNumber(selectedTrace.versatilityBucket.value, 3)}x)
                    </div>
                    {selectedTrace.versatilityBucket.components.map((c, i) => (
                      <div key={i} style={{ color: '#cbd5e1' }}>• {c}</div>
                    ))}
                  </div>

                  <div className="combat-sim__bucket-card">
                    <div className="combat-sim__bucket-title">
                      4. Crit EV ({formatNumber(selectedTrace.critEv.value, 3)}x)
                    </div>
                    {selectedTrace.critEv.components.map((c, i) => (
                      <div key={i} style={{ color: '#cbd5e1' }}>• {c}</div>
                    ))}
                  </div>

                  <div className="combat-sim__bucket-card">
                    <div className="combat-sim__bucket-title">
                      5. Luck EV ({formatNumber(selectedTrace.luckEv.value, 3)}x)
                    </div>
                    {selectedTrace.luckEv.components.map((c, i) => (
                      <div key={i} style={{ color: '#cbd5e1' }}>• {c}</div>
                    ))}
                  </div>

                  <div className="combat-sim__bucket-card">
                    <div className="combat-sim__bucket-title">
                      6. Target Mitigation & Zeroed Terms
                    </div>
                    <div>Def Mitigation Mult: {formatNumber(selectedTrace.defMitigation, 2)}x</div>
                    {selectedTrace.zeroedTerms.length > 0 ? (
                      selectedTrace.zeroedTerms.map((z, i) => (
                        <div key={i} style={{ color: '#f59e0b' }}>⚠️ {z} = 0 (Unverified)</div>
                      ))
                    ) : (
                      <div style={{ color: '#6ee7b7' }}>✓ No unverified terms</div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Buff Uptime Section */}
            {simResult.buffUptime.length > 0 && (
              <div>
                <div className="combat-sim__section-title">
                  <span>Dynamic Buffs & Procs Uptime</span>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>
                    Tracked in real-time across 6,000 simulator ticks (50ms)
                  </span>
                </div>
                <div className="combat-sim__table-container">
                  <table className="combat-sim__table">
                    <thead>
                      <tr>
                        <th>Buff Name</th>
                        <th>Source</th>
                        <th>Uptime %</th>
                        <th>Active Effect</th>
                        <th>Time-Weighted Avg Effect</th>
                        <th>Buff Contribution</th>
                      </tr>
                    </thead>
                    <tbody>
                      {simResult.buffUptime.map((b) => (
                        <tr key={b.buffId}>
                          <td><strong>{b.name}</strong></td>
                          <td>
                            <span className={`combat-sim__table-badge combat-sim__table-badge--${b.source}`}>
                              {b.source}
                            </span>
                          </td>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div
                                style={{
                                  width: '60px',
                                  height: '6px',
                                  background: 'rgba(255,255,255,0.1)',
                                  borderRadius: '3px',
                                  overflow: 'hidden',
                                }}
                              >
                                <div
                                  style={{
                                    width: `${Math.min(100, b.uptimePct)}%`,
                                    height: '100%',
                                    background: '#3b82f6',
                                  }}
                                />
                              </div>
                              {formatNumber(b.uptimePct, 1)}%
                            </div>
                          </td>
                          <td>+{formatNumber(b.valuePctWhenActive, 2)}%</td>
                          <td>+{formatNumber(b.avgValuePct, 2)}%</td>
                          <td>
                            <strong>{formatNumber(b.contributionPct, 1)}%</strong>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Combat Log Accordion */}
            <div>
              <div className="combat-sim__section-title">
                <span>Combat Log History ({simResult.combatLog.length} events)</span>
                <button
                  type="button"
                  className="combat-sim__btn-inspect"
                  onClick={() => setShowCombatLog((v) => !v)}
                >
                  {showCombatLog ? 'Hide Combat Log' : 'Show Combat Log'}
                </button>
              </div>
              {showCombatLog && (
                <div
                  className="combat-sim__table-container"
                  style={{ maxHeight: '200px', overflowY: 'auto' }}
                >
                  <table className="combat-sim__table">
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Action</th>
                        <th>Event</th>
                        <th>Amount</th>
                        <th>Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {simResult.combatLog.slice(0, 150).map((log, i) => (
                        <tr key={i}>
                          <td>{(log.tMs / 1000).toFixed(2)}s</td>
                          <td>{log.name}</td>
                          <td>
                            <span
                              className={`combat-sim__table-badge combat-sim__table-badge--${
                                log.kind === 'damage' ? 'ultimate' : log.kind === 'heal' ? 'active' : 'basic'
                              }`}
                            >
                              {log.kind}
                            </span>
                          </td>
                          <td>{log.amount > 0 ? formatNumber(log.amount, 0) : '-'}</td>
                          <td style={{ color: '#94a3b8' }}>{log.note ?? '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}

        {/* Multi-Build Comparator Tab */}
        {!isLoadingData && activeTab === 'compare' && compareReport && (
          <>
            <div className="combat-sim__spec-banner">
              <div>
                <strong>🔒 Spec-Locked Multi-Build Comparison</strong>
                <div style={{ color: '#93c5fd', marginTop: '2px' }}>
                  Comparing builds for Class:{' '}
                  <code>{compareReport.specLock.professionKey}</code> ({compareReport.specLock.professionTypeKey})
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: '#cbd5e1' }}>
                  Active Builds: <strong>{compareReport.entries.length}</strong> | Excluded:{' '}
                  <strong>{compareReport.excluded.length}</strong>
                </span>
              </div>
            </div>

            {/* Winner Summary Box */}
            {compareReport.winnerReasons.length > 0 && (
              <div className="combat-sim__winner-box">
                <div className="combat-sim__winner-title">
                  🏆 Comparison Analysis & Winner Explanation:
                </div>
                <ul style={{ paddingLeft: '18px', margin: 0 }}>
                  {compareReport.winnerReasons.map((reason, idx) => (
                    <li key={idx} style={{ marginBottom: '4px' }}>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Candidate Builds Table */}
            <div>
              <div className="combat-sim__section-title">
                <span>Build Ranking & Comparative Matrix</span>
              </div>
              <div className="combat-sim__table-container">
                <table className="combat-sim__table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Build Name</th>
                      <th>Effective DPS</th>
                      <th>DPS vs Best</th>
                      <th>Peak Burst DPS</th>
                      <th>Effective HPS</th>
                      <th>Strengths & Highlights</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareReport.entries.map((entry) => (
                      <tr
                        key={entry.planId}
                        style={{
                          background:
                            entry.rankByDps === 1
                              ? 'rgba(16, 185, 129, 0.08)'
                              : entry.planId === CURRENT_BUILD_ID
                              ? 'rgba(59, 130, 246, 0.08)'
                              : undefined,
                        }}
                      >
                        <td>
                          <strong>#{entry.rankByDps}</strong>
                        </td>
                        <td>
                          <strong>{entry.planName}</strong>
                          {entry.planId === CURRENT_BUILD_ID && (
                            <span
                              style={{
                                marginLeft: '6px',
                                fontSize: '10px',
                                padding: '2px 5px',
                                background: '#2563eb',
                                color: '#fff',
                                borderRadius: '4px',
                              }}
                            >
                              Active
                            </span>
                          )}
                        </td>
                        <td>
                          <strong>{formatNumber(entry.result.dps, 1)}</strong>
                        </td>
                        <td>
                          {entry.dpsDeltaVsBestPct === 0 ? (
                            <span className="combat-sim__diff-tag combat-sim__diff-tag--win">
                              BEST
                            </span>
                          ) : (
                            <span className="combat-sim__diff-tag combat-sim__diff-tag--down">
                              {formatNumber(entry.dpsDeltaVsBestPct, 1)}%
                            </span>
                          )}
                        </td>
                        <td>{formatNumber(entry.result.peakBurstDps, 1)}</td>
                        <td>{formatNumber(entry.result.hps, 1)}</td>
                        <td>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                            {entry.strengths.slice(0, 3).map((s, i) => (
                              <span
                                key={i}
                                className="combat-sim__diff-tag combat-sim__diff-tag--win"
                              >
                                {s}
                              </span>
                            ))}
                            {entry.weaknesses.slice(0, 2).map((w, i) => (
                              <span
                                key={i}
                                className="combat-sim__diff-tag combat-sim__diff-tag--down"
                              >
                                {w}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Excluded Builds */}
            {compareReport.excluded.length > 0 && (
              <div>
                <div className="combat-sim__section-title">
                  <span>Excluded Builds ({compareReport.excluded.length})</span>
                </div>
                <div className="combat-sim__table-container">
                  <table className="combat-sim__table">
                    <thead>
                      <tr>
                        <th>Build Name</th>
                        <th>Exclusion Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      {compareReport.excluded.map((exc) => (
                        <tr key={exc.planId}>
                          <td>{exc.planName}</td>
                          <td style={{ color: '#f59e0b' }}>{exc.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* Simulator Settings Tab */}
        {!isLoadingData && activeTab === 'settings' && (
          <div>
            <div className="combat-sim__section-title">
              <span>Simulation & Target Parameters</span>
            </div>
            <div className="combat-sim__settings-grid">
              <div className="combat-sim__field-group">
                <label>Simulation Duration (seconds)</label>
                <input
                  type="number"
                  value={config.durationSec}
                  onChange={(e) => updateConfig({ durationSec: Number(e.target.value) || 300 })}
                />
                <span className="combat-sim__field-note">
                  Standard benchmark duration is 300 seconds (5 minutes).
                </span>
              </div>

              <div className="combat-sim__field-group">
                <label>Tick Resolution (milliseconds)</label>
                <input
                  type="number"
                  value={config.tickMs}
                  onChange={(e) => updateConfig({ tickMs: Number(e.target.value) || 50 })}
                />
                <span className="combat-sim__field-note">
                  Default: 50ms (20 ticks/sec, 6,000 ticks per 5 minutes).
                </span>
              </div>

              <div className="combat-sim__field-group">
                <label>Peak Burst Window (seconds)</label>
                <input
                  type="number"
                  value={config.burstWindowSec}
                  onChange={(e) => updateConfig({ burstWindowSec: Number(e.target.value) || 10 })}
                />
                <span className="combat-sim__field-note">
                  Sliding window size used to measure highest burst DPS.
                </span>
              </div>

              <div className="combat-sim__field-group">
                <label>Target Category</label>
                <select
                  value={config.target.kind}
                  onChange={(e) =>
                    updateConfig({
                      target: { ...config.target, kind: e.target.value as TargetKind },
                    })
                  }
                >
                  <option value="boss">Boss (Triggers Elite & Boss damage bonuses)</option>
                  <option value="elite">Elite</option>
                  <option value="normal">Normal</option>
                </select>
                <span className="combat-sim__field-note">
                  Affects Elite Strike and boss damage multipliers.
                </span>
              </div>

              <div className="combat-sim__field-group">
                <label>Target Defense Mitigation (%)</label>
                <input
                  type="number"
                  value={config.target.defMitigationPct}
                  onChange={(e) =>
                    updateConfig({
                      target: {
                        ...config.target,
                        defMitigationPct: Number(e.target.value) || 0,
                      },
                    })
                  }
                />
                <span className="combat-sim__field-note">
                  Enemy defense mitigation formula is unverified; defaults to 0%.
                </span>
              </div>

              <div className="combat-sim__field-group">
                <label>Deterministic PRNG Seed</label>
                <input
                  type="number"
                  value={config.rngSeed}
                  onChange={(e) => updateConfig({ rngSeed: Number(e.target.value) || 1 })}
                />
                <span className="combat-sim__field-note">
                  Seed for mulberry32 generator (DMG Stack 20% proc rolls).
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </DraggableDialog>
  );
}

