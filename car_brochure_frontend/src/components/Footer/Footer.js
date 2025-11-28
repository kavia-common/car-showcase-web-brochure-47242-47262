import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>Ocean Motors</div>
            <p className={styles.muted}>Modern vehicles with precision engineering.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul className={styles.list}>
              <li><a href="/">Home</a></li>
              <li><a href="/models">Models</a></li>
              <li><a href="/compare">Compare</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className={styles.list}>
              <li><a href="mailto:sales@oceanmotors.example">sales@oceanmotors.example</a></li>
              <li><a href="tel:+1800123456">+1 (800) 123-456</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <small>© {new Date().getFullYear()} Ocean Motors. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
