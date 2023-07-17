"use client";

import React, { createContext, useEffect, useState } from "react";

export const MotionContext = createContext(false);

export const MotionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, [setPrefersReducedMotion]);

  return (
    <MotionContext.Provider value={prefersReducedMotion}>
      {children}
    </MotionContext.Provider>
  );
};
