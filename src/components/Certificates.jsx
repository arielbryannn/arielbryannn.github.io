import React, { useState } from "react";

// Import Logo Gunadarma
import GunadarmaLogo from "../assets/gunadarma.png"; 

// Import 9 gambar sertifikat utama
import Certificate1Img from "../assets/certificate1.jpeg";
import Certificate2Img from "../assets/certificate2.jpeg";
import Certificate3Img from "../assets/certificate3.jpeg";
import Certificate4Img from "../assets/certificate4.jpeg";
import Certificate5Img from "../assets/certificate5.jpeg";
import Certificate6Img from "../assets/certificate6.jpeg";
import Certificate7Img from "../assets/certificate7.jpeg";
import Certificate8Img from "../assets/certificate8.jpeg";
import Certificate9Img from "../assets/certificate9.jpeg";

// Import 2 foto untuk Awards (Piala & Sertifikat ESC 2025)
import Certificate10Img from "../assets/certificate10.jpeg";
import Certificate11Img from "../assets/certificate11.jpeg";

// Array data sertifikat (1 sampai 9)
const certificatesData = [
  { id: 1, title: "Cisco Basic", issuer: "ID-Networkers (IDN.ID)", image: Certificate1Img },
  { id: 2, title: "Computer Network Basic", issuer: "ID-Networkers (IDN.ID)", image: Certificate2Img },
  { id: 3, title: "Introduction to Secure Networking", issuer: "Microsoft", image: Certificate3Img },
  { id: 4, title: "Addressing and Routing in Computer Networks", issuer: "Gunadarma University", image: Certificate4Img },
  { id: 5, title: "Intro to Applied AI, Analytics, and Automation", issuer: "RevoU Indonesia", image: Certificate5Img },
  { id: 6, title: "Computer Network Implementation", issuer: "Gunadarma University", image: Certificate6Img },
  { id: 7, title: "Identify Computer Network", issuer: "Gunadarma University", image: Certificate7Img },
  { id: 8, title: "Career Acceleration and Productivity with Gemini AI", issuer: "Dicoding Indonesia", image: Certificate8Img },
  { id: 9, title: "Introduction to AI", issuer: "Dicoding Indonesia", image: Certificate9Img },
];

// Data Awards (Khusus Lomba Drone)
const awardsData = [
  {
    id: 1,
    title: "2nd Place, Drone Competition – ESC 2025 (Embedded System Competition)",
    issuer: "Pusat Studi Multimedia & Robotika Universitas Gunadarma · Apr 2025",
    description: "Achieved 2nd Place in the Drone Category at the Embedded System Competition (ESC) 2025. Operated and programmed a drone using a mobile-based drag-and-drop navigation system.",
    gallery: [
      { id: 10, name: "Drone 2nd place trophy", image: Certificate10Img },
      { id: 11, name: "Certificate 2nd place", image: Certificate11Img },
    ],
  },
];

export default function Certificates() {
  const [activeTab, setActiveTab] = useState("certificates");
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  // State untuk memperbesar/preview gambar
  const [selectedImage, setSelectedImage] = useState(null);

  const displayedCertificates = showAllCertificates ? certificatesData : certificatesData.slice(0, 3);

  return (
    <div id="certificates-awards" className="mt-32 py-10">
      <div className="text-center mb-10">
        {/* Judul dengan Efek White Glowing */}
        <h2 
          data-aos="fade-up" 
          className="text-3xl sm:text-4xl font-extrabold mb-2 text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.85)] tracking-wide"
        >
          Certificates & Awards
        </h2>
        
        <p data-aos="fade-up" className="text-base text-gray-400">
          Explore my professional certifications and achievements.
        </p>

        {/* Tab Pilihan */}
        <div data-aos="fade-up" className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition duration-300 cursor-pointer flex items-center gap-2 ${
              activeTab === "certificates"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-900/50"
                : "bg-purple-950/30 border border-purple-500/20 text-gray-300 hover:bg-purple-900/40"
            }`}
          >
            <i className="ri-award-line text-lg"></i> Certificates
          </button>
          
          <button
            onClick={() => setActiveTab("awards")}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition duration-300 cursor-pointer flex items-center gap-2 ${
              activeTab === "awards"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-900/50"
                : "bg-purple-950/30 border border-purple-500/20 text-gray-300 hover:bg-purple-900/40"
            }`}
          >
            <i className="ri-trophy-line text-lg"></i> Awards
          </button>
        </div>
      </div>

      {/* Tab Certificates */}
      {activeTab === "certificates" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCertificates.map((item, index) => (
              <div
                key={item.id}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className="bg-purple-950/30 border border-purple-500/20 backdrop-blur-xl rounded-2xl p-5 flex flex-col justify-between hover:border-purple-500/50 transition duration-300"
              >
                <div>
                  <div 
                    onClick={() => setSelectedImage(item.image)}
                    className="rounded-xl overflow-hidden mb-4 bg-purple-900/20 border border-purple-500/10 h-48 cursor-pointer group relative"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                      <i className="ri-zoom-in-line text-2xl text-white"></i>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-purple-300 mb-4">{item.issuer}</p>
                </div>

                <button
                  onClick={() => setSelectedImage(item.image)}
                  className="bg-purple-600 hover:bg-purple-500 text-white w-full py-2.5 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-2 transition duration-300 shadow-md cursor-pointer"
                >
                  Lihat Sertifikat <i className="ri-external-link-line"></i>
                </button>
              </div>
            ))}
          </div>

          {/* Tombol See More / Less More */}
          {certificatesData.length > 3 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllCertificates(!showAllCertificates)}
                className="px-8 py-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-200 hover:bg-purple-900/50 hover:text-white font-semibold text-sm transition duration-300 cursor-pointer shadow-lg inline-flex items-center gap-2"
              >
                <span>{showAllCertificates ? "Less More" : "See More"}</span>
                <i className={`${showAllCertificates ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"} text-lg`}></i>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tab Awards */}
      {activeTab === "awards" && (
        <div className="max-w-3xl mx-auto">
          {awardsData.map((award) => (
            <div
              key={award.id}
              data-aos="fade-up"
              className="relative overflow-hidden bg-gradient-to-b from-purple-950/50 to-purple-950/20 border border-purple-500/30 backdrop-blur-xl rounded-3xl p-6 sm:p-8 hover:border-purple-400/60 transition duration-500 shadow-xl shadow-purple-950/40 group"
            >
              {/* Background Glow Effect di Pojok Kanan Atas Kartu */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/30 transition duration-500"></div>

              {/* Badge Highlight */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span>🏆 Highlight Achievement</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition duration-300">
                {award.title}
              </h3>
              
              {/* SUB-INFO LOGO & TEKS (UKURAN LOGO DIPERBESAR) */}
              <div className="flex items-center gap-2.0 mb-4">
                <img 
                  src={GunadarmaLogo} 
                  alt="Universitas Gunadarma" 
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0" 
                />
                <p className="text-xs sm:text-sm text-purple-300 font-medium leading-snug">
                  {award.issuer}
                </p>
              </div>

              {/* Tampilan 2 Foto Dokumentasi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {award.gallery.map((item, idx) => (
                  <div
                    key={item.id}
                    data-aos="zoom-in"
                    data-aos-delay={idx * 100}
                    onClick={() => setSelectedImage(item.image)}
                    className="h-60 rounded-2xl overflow-hidden bg-purple-900/20 border border-purple-500/20 cursor-pointer group/card relative shadow-lg hover:border-purple-400/80 hover:shadow-purple-900/40 transition-all duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition duration-500 ease-out"
                    />
                    {/* Gradient Overlay saat Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover/card:opacity-95 flex flex-col justify-end p-4 transition duration-300">
                      <span className="text-xs font-semibold text-white flex items-center justify-between">
                        <span>{item.name}</span>
                        <span className="p-1.5 rounded-lg bg-purple-600/80 text-white group-hover/card:scale-110 transition duration-300">
                          <i className="ri-zoom-in-line text-sm"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL PREVIEW GAMBAR */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="fixed top-6 right-6 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center z-50 transition duration-300 cursor-pointer backdrop-blur-sm"
          >
            <i className="ri-close-line text-3xl"></i>
          </button>

          <div 
            className="relative max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}