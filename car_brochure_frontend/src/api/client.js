import { getApiBase } from '../theme/theme';

const API_BASE = getApiBase();

/**
 * PUBLIC_INTERFACE
 * apiGet
 * Basic GET wrapper that resolves with mock behavior when API is undefined.
 */
export async function apiGet(path) {
  if (!API_BASE) {
    // Placeholder: emulate response delay and return empty data
    await new Promise(r => setTimeout(r, 100));
    return { ok: true, data: null };
  }
  const url = `${API_BASE}${path}`;
  const res = await fetch(url);
  const data = await res.json().catch(() => null);
  return { ok: res.ok, data };
}
