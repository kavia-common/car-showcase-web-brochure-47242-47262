import React, { useMemo, useState } from 'react';
import styles from './Customizer.module.css';

/**
 * Renders interactive selectors for colors, wheels, and trims.
 * Updates a simple preview panel and announces changes for accessibility.
 */
export default function Customizer({ model }) {
  const [color, setColor] = useState(model.availableColors?.[0]?.code || '#2563EB');
  const [trim, setTrim] = useState(model.trims?.[0] || 'Base');
  const [wheel, setWheel] = useState(model.wheels?.[0] || '');

  const announcer = useMemo(() => document.createElement('div'), []);
  // attach announcer to body once
  useMemo(() => {
    announcer.className = 'visually-hidden';
    announcer.setAttribute('role', 'status');
    announcer.setAttribute('aria-live', 'polite');
    document.body.appendChild(announcer);
    return () => document.body.removeChild(announcer);
  }, [announcer]);

  const announce = (msg) => {
    announcer.textContent = msg;
  };

  return (
    <section className="container">
      <div className={styles.wrapper}>
        <div className={styles.preview}>
          <div className={styles.previewCar} style={{ background: color }}>
            <img src={model.gallery?.[0]} alt={`${model.name} preview`} loading="lazy" />
            <div className={styles.previewBadge}>
              <span>{model.name}</span>
              <span>{trim}</span>
              <span>{wheel}</span>
            </div>
          </div>
        </div>
        <div className={styles.controls}>
          <div className="card" style={{ padding: 16 }}>
            <h3>Color</h3>
            <div className={styles.swatches} role="listbox" aria-label="Select color">
              {model.availableColors?.map((c) => (
                <button
                  key={c.code}
                  className={`${styles.swatch} ${color === c.code ? styles.swatchActive : ''}`}
                  style={{ background: c.code }}
                  title={c.name}
                  aria-label={c.name}
                  aria-selected={color === c.code}
                  onClick={() => { setColor(c.code); announce(`Color set to ${c.name}`); }}
                />
              ))}
            </div>
          </div>
          <div className="card" style={{ padding: 16 }}>
            <h3>Trim</h3>
            <div className={styles.options}>
              {model.trims?.map((t) => (
                <button
                  key={t}
                  className={`btn ${trim === t ? 'btn-primary' : ''}`}
                  aria-pressed={trim === t}
                  onClick={() => { setTrim(t); announce(`Trim set to ${t}`); }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="card" style={{ padding: 16 }}>
            <h3>Wheels</h3>
            <div className={styles.options}>
              {model.wheels?.map((w) => (
                <button
                  key={w}
                  className={`btn ${wheel === w ? 'btn-secondary' : ''}`}
                  aria-pressed={wheel === w}
                  onClick={() => { setWheel(w); announce(`Wheels set to ${w}`); }}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
