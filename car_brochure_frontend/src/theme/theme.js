export const theme = {
  name: 'Ocean Professional',
  colors: {
    primary: '#2563EB',
    secondary: '#F59E0B',
    success: '#F59E0B',
    error: '#EF4444',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#111827'
  },
  gradient: 'linear-gradient(180deg, rgba(37, 99, 235, 0.06) 0%, rgba(249, 250, 251, 1) 100%)',
  radius: 14,
  spacing: (n) => 4 * n
};

// PUBLIC_INTERFACE
export function getApiBase() {
  /**
   * Returns the API base URL from environment for future integrations.
   * It is safe if undefined and should not break the app.
   */
  return process.env.REACT_APP_API_BASE || process.env.REACT_APP_BACKEND_URL || '';
}
