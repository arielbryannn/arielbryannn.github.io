import React, { useState, useEffect } from "react";

export default function Preloader({ onComplete }) {
  // Step 1: Text Greeting ("prepare to my portfolio website")
  // Step 2: Percentage Loading (0% - 100%)
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Tahap 1: Tampilkan teks sambutan selama 1.8 detik, lalu beralih ke hitungan persen
    const textTimer = setTimeout(() => {
      setStep(2);
    }, 1800);

    return () => clearTimeout(textTimer);
  }, []);

  useEffect(() => {
    // Tahap 2: Hitungan persentase dari 0% sampai 100%
    if (step === 2) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            // Efek fade-out sebelum preloader hilang
            setTimeout(() => {
              setIsFadingOut(true);
            }, 300);

            // Panggil callback setelah animasi selesai
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 800);

            return 100;
          }
          // Kecepatan kenaikan persen acak agar terasa alami
          return prev + Math.floor(Math.random() * 8) + 2;
        });
      }, 40);

      return () => clearInterval(interval);
    }
  }, [step, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-700 select-none ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Grid & Emerald Aurora Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(16,185,129,0.12),transparent)] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-lg w-full">
        {/* TAHAP 1: TEKS AWAL */}
        {step === 1 && (
          <div className="animate-fade-in space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Initializing Workspace</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide leading-relaxed font-mono">
              WELCOME TO MY PORTFOLIO WEBSITE
            </h2>
          </div>
        )}

        {/* TAHAP 2: LOADING PERSEN */}
        {step === 2 && (
          <div className="animate-fade-in space-y-6">
            {/* Angka Persentase */}
            <div className="flex items-baseline justify-center gap-1 font-mono">
              <span className="text-6xl sm:text-7xl font-extrabold text-white tracking-tighter">
                {progress > 100 ? 100 : progress}
              </span>
              <span className="text-2xl font-bold text-emerald-400">%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                style={{ width: `${progress > 100 ? 100 : progress}%` }}
              />
            </div>

            {/* Status Indicator */}
            <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              {progress < 100 ? "Prepare Website" : "Here We Go!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}