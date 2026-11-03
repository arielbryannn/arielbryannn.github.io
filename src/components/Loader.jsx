import React, { useState, useEffect } from "react";

export default function Loader({ onComplete }) {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isSplitting, setIsSplitting] = useState(false);

  useEffect(() => {
    // Tahap 1: Tampilkan teks sambutan selama 2.5 detik
    const textTimer = setTimeout(() => {
      setStep(2);
    }, 2500);

    return () => clearTimeout(textTimer);
  }, []);

  useEffect(() => {
    // Tahap 2: Hitungan persentase dari 0% sampai 100%
    if (step === 2) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            
            // Begitu 100%, tunggu sebentar sebelum tirai membuka
            setTimeout(() => {
              setIsSplitting(true);
            }, 300);

            // Selesaikan transisi dan tutup loader sepenuhnya
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 1100);

            return 100;
          }
          return prev + Math.floor(Math.random() * 4) + 1;
        });
      }, 55);

      return () => clearInterval(interval);
    }
  }, [step, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none select-none">
      
      {/* TIRAI BAGIAN ATAS */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-[#050505] transition-transform duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-auto ${
          isSplitting ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* TIRAI BAGIAN BAWAH */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-[#050505] transition-transform duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-auto ${
          isSplitting ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* KONTEN TEKS & LOADING DI TENGAH */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center px-6 transition-opacity duration-400 ${
          isSplitting ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Background Glow Halus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(16,185,129,0.1),transparent)] pointer-events-none" />

        <div className="relative z-10 text-center max-w-xl w-full">
          {/* TAHAP 1: TEKS SAMBUTAN DENGAN FONT LEBIH BESAR & EFEK CAHAYA BERJALAN */}
          {step === 1 && (
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-black tracking-wider uppercase font-mono animate-shimmer-text leading-tight">
                WELCOME TO MY PORTFOLIO WEBSITE
              </h2>
            </div>
          )}

          {/* TAHAP 2: PROGRESS PERSEN & BAR */}
          {step === 2 && (
            <div className="space-y-5 animate-fade-in">
              <div className="flex items-baseline justify-center gap-1 font-mono">
                <span className="text-6xl sm:text-7xl font-extrabold text-white tracking-tighter">
                  {progress > 100 ? 100 : progress}
                </span>
                <span className="text-2xl font-bold text-emerald-400">%</span>
              </div>

              {/* Progress Bar Sinkron */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                  style={{ width: `${progress > 100 ? 100 : progress}%` }}
                />
              </div>

              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest pt-1">
                {progress < 100 ? "Prepare Website" : "Here We Go!"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}