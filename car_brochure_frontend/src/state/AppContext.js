import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { models } from '../data/models';

const AppContext = createContext({
  selectedModelId: null,
  setSelectedModelId: () => {},
  compareSelection: [],
  setCompareSelection: () => {},
});

// PUBLIC_INTERFACE
export function AppProvider({ children }) {
  /**
   * Provides global selection states and persists last selected model.
   */
  const [selectedModelId, setSelectedModelId] = useState(() => {
    return localStorage.getItem('selectedModelId') || models[0]?.id || null;
  });
  const [compareSelection, setCompareSelection] = useState(() => []);

  useEffect(() => {
    if (selectedModelId) {
      localStorage.setItem('selectedModelId', selectedModelId);
    }
  }, [selectedModelId]);

  const value = useMemo(
    () => ({
      selectedModelId,
      setSelectedModelId,
      compareSelection,
      setCompareSelection
    }),
    [selectedModelId, compareSelection]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// PUBLIC_INTERFACE
export function useApp() {
  /** Hook to access global app state. */
  return useContext(AppContext);
}
