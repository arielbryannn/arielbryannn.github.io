import React, { useState, useEffect } from "react";

export default function SplashLoader({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    const unmountTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 1300);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100 transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin"></div>
        <span className="absolute font-bold text-purple-400 text-sm">AB</span>
      </div>
      <p className="mt-4 text-sm font-medium tracking-widest text-slate-400 uppercase animate-pulse">
        Loading Portfolio...
      </p>
    </div>
  );
}