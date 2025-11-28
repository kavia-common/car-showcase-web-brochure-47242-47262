import React from 'react';
import styles from './SpecsPanel.module.css';

const specOrder = [
  { key: 'engine', label: 'Engine' },
  { key: 'power', label: 'Power' },
  { key: 'zeroToSixty', label: '0–60' },
  { key: 'rangeOrMpg', label: 'Range/MPG' },
  { key: 'drivetrain', label: 'Drivetrain' },
];

export default function SpecsPanel({ models = [], title = 'Key Specifications' }) {
  const isCompare = models.length > 1;

  return (
    <section className="container">
      <div className="card" style={{ padding: 20 }}>
        <div className={styles.header}>
          <h2>{title}</h2>
          {isCompare && <span className="badge">Compare</span>}
        </div>
        <div className={`${styles.grid} ${isCompare ? styles.compare : ''}`}>
          {specOrder.map(({ key, label }) => (
            <div key={key} className={styles.row}>
              <div className={styles.label}>{label}</div>
              {models.map((m) => (
                <div key={m.id} className={styles.value}>
                  {m.specs[key]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
