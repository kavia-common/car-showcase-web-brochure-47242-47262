import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home';
import ModelsPage from './pages/Models';
import ComparePage from './pages/Compare';
import { ThemeProvider } from './theme/ThemeContext';
import { AppProvider } from './state/AppContext';

/**
 * PUBLIC_INTERFACE
 * App
 * The main application shell that sets up routing, theme, and global state providers.
 */
function App() {
  const [mounted, setMounted] = useState(false);

  // Ensure initial mount for transitions
  useEffect(() => {
    setMounted(true);
  }, []);

  const appShellStyle = useMemo(
    () => ({
      minHeight: '100vh',
      background:
        'linear-gradient(180deg, rgba(37, 99, 235, 0.06) 0%, rgba(249, 250, 251, 1) 100%)',
      transition: 'background 300ms ease',
    }),
    []
  );

  return (
    <ThemeProvider>
      <AppProvider>
        <div style={appShellStyle} className={mounted ? 'app-mounted' : ''}>
          <Router>
            <Navbar />
            <main role="main" aria-label="Main content" style={{ paddingTop: 72 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/models" element={<ModelsPage />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
