import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import { listTools } from "../data"; // Pastikan lokasi data.js sesuai

const IconCloud = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Mengambil semua link gambar dari listTools
    const icons = listTools.map((tool) => tool.gambar);

    // Mengubah URL menjadi elemen tag <img>
    const htmlTexts = icons.map(
      (imgUrl) =>
        `<img src="${imgUrl}" alt="tech-icon" class="w-10 h-10 object-contain hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />`
    );

    const options = {
      radius: 170, // Ukuran besar-kecilnya bola logo
      maxSpeed: "normal",
      initSpeed: "normal",
      direction: 135,
      keep: true,
      useHTML: true,
    };

    containerRef.current.innerHTML = "";
    TagCloud(containerRef.current, htmlTexts, options);
  }, []);

  return (
    <div className="flex items-center justify-center w-full py-6 overflow-hidden">
      <div className="relative flex items-center justify-center">
        {/* Efek Cahaya Ungu di Belakang Bola */}
        <div className="absolute w-56 h-56 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Tempat Bola Berputar Rendred */}
        <div ref={containerRef} className="tagcloud text-center cursor-grab active:cursor-grabbing" />
      </div>
    </div>
  );
};

export default IconCloud;