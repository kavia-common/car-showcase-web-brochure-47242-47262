import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useTheme } from '../../theme/ThemeContext';

export default function Navbar() {
  const { toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main Navigation">
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Link to="/" className={styles.brand} aria-label="Home">
          <div className={styles.logo} aria-hidden="true">🚗</div>
          <span className={styles.brandText}>Ocean Motors</span>
        </Link>

        <nav className={styles.navlinks} aria-label="Primary">
          <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to="/models">Models</NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to="/compare">Compare</NavLink>
        </nav>

        <div className={styles.actions}>
          <button className="btn" onClick={toggle} aria-label="Toggle theme">Theme</button>
          <a className="btn btn-primary" href="#book" onClick={(e) => {
            if (location.pathname !== '/') return;
          }}>Book a Test Drive</a>
        </div>
      </div>
    </header>
  );
}
