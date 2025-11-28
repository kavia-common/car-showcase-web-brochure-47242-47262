import React from 'react';
import styles from './Hero.module.css';

export default function Hero({ title, subtitle, image, onPrimary, onSecondary }) {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.media} role="img" aria-label={title}>
        <img
          src={image}
          alt={title}
          loading="eager"
          className={styles.img}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>
      <div className={`container ${styles.content}`}>
        <span className="badge">Introducing</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.cta}>
          <button className="btn btn-primary" onClick={onPrimary}>Explore Models</button>
          <button className="btn btn-secondary" onClick={onSecondary}>Build Yours</button>
        </div>
      </div>
    </section>
  );
}
