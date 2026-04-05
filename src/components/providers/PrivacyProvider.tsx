"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type PrivacyMode = "standard" | "strict";

interface PrivacyContextType {
  mode: PrivacyMode;
  setMode: (mode: PrivacyMode) => void;
}

const PrivacyContext = createContext<PrivacyContextType | undefined>(undefined);

export function PrivacyProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<PrivacyMode>("standard");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("hc_privacy_mode") as PrivacyMode;
      if (saved) {
        setModeState(saved);
      }
    } catch {
      // Ignored
    }
    setMounted(true);
  }, []);

  const setMode = (newMode: PrivacyMode) => {
    setModeState(newMode);
    try {
      if (newMode === "strict") {
        sessionStorage.setItem("hc_privacy_mode", "strict");
        // Clear anything we might have saved in localStorage if any
        localStorage.removeItem("hc_lang");
      } else {
        sessionStorage.setItem("hc_privacy_mode", "standard");
      }
    } catch {
      // Ignore storage errors
    }
  };

  if (!mounted) {
    return (
      <PrivacyContext.Provider value={{ mode: "standard", setMode: () => {} }}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </PrivacyContext.Provider>
    );
  }

  return (
    <PrivacyContext.Provider value={{ mode, setMode }}>
      {children}
    </PrivacyContext.Provider>
  );
}

export function usePrivacy() {
  const context = useContext(PrivacyContext);
  if (context === undefined) {
    throw new Error("usePrivacy must be used within a PrivacyProvider");
  }
  return context;
}
