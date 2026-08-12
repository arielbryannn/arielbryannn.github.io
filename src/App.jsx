import HeroImage from "./assets/ariel.PNG";
import SmknLogo from "./assets/logosmk.png"; 
import GunadarmaLogo from "./assets/gunadarma.png"; 
import PlnLogo from "./assets/PLN.png"; 
import IconCloud from "./components/IconCloud";
import Navbar from "./components/Navbar"; 
import Certificates from "./components/Certificates"; 
import { useState, useEffect, useRef } from "react";
import { listTools } from "./data";
import emailjs from "@emailjs/browser";

import AOS from "aos";
import "aos/dist/aos.css";

// IMPORT GAMBAR PROYEK EMBEDDED (Pakan Ikan)
import Embedded1 from "./assets/embedded1.jpeg";
import Embedded2 from "./assets/embedded2.jpeg";
import Embedded3 from "./assets/embedded3.jpeg";
import Embedded4 from "./assets/embedded4.jpeg";

// IMPORT GAMBAR PROYEK DROWSINESS DETECTION
import DrowsinessImage from "./assets/DrownsinessDetection.jpeg";

// IMPORT GAMBAR PROYEK CISCO SIMULATION
import Cisco1 from "./assets/cisco1.jpeg";
import Cisco2 from "./assets/cisco2.jpeg";
import Cisco3 from "./assets/cisco3.jpeg";
import Cisco4 from "./assets/cisco4.jpeg";

// IMPORT GAMBAR PROYEK HAND TRACKING
import HandTrackingImage from "./assets/handtracking.jpeg";

// IMPORT GAMBAR PROYEK FIRE DETECTION
import Fire1 from "./assets/fire1.jpeg";
import Fire2 from "./assets/fire2.jpeg";
import Fire3 from "./assets/fire3.jpeg";
import Fire4 from "./assets/fire4.jpeg";

const categoryIcons = {
  "Programming & Development": "ri-code-s-slash-line text-purple-400",
  "Networking & Infrastructure": "ri-global-line text-purple-400",
  "Embedded System & IoT": "ri-cpu-line text-purple-400",
  "Cloud & DevOps": "ri-cloud-line text-purple-400",
};

// EDUCATION DATA
const educationData = [
  {
    id: 1,
    major: "Bachelor of Computer System",
    institution: "Gunadarma University",
    logo: GunadarmaLogo,
    year: "2024 - Present",
    description: "Focusing on Computer Systems, Networking, and IoT. Experienced in building projects Automatic Smart Fish Feeder with Arduino & ESP32: Scheduled auto-feeding using RTC module and servo, water quality monitoring via TDS sensor (PPM), and real-time data integration to Blynk app via ESP32.",
    achievements: [
      { text: "Current GPA: 3.76 / 4.00", id: "status" },
    ],
    tags: ["Computer Systems", "Networking", "Embedded Systems", "IoT", "Cisco"]
  },
  {
    id: 2,
    major: "Computer Network Engineering",
    institution: "SMKN 1 Cikarang Barat",
    logo: SmknLogo,
    year: "2021 - 2024",
    description: "Learned networking fundamentals and MikroTik configurations (DHCP, Wireless, Trunking, Bridging, NAT, DNS, Firewall). Hands-on practice with RJ45 crimping, fiber optic cabling, and server rack assembly.",
    achievements: [
      { text: "Final Academic Average: 84.75 / 100", id: "avg" },
    ],
    tags: ["Computer Networking", "MikroTik", "Fiber Optic", "Routing & Switching", "Infrastructure"]
  },
];

// EXPERIENCE DATA
const experienceData = [
  {
    id: 1,
    company: "Gunadarma University",
    type: "Part-time",
    logo: GunadarmaLogo,
    duration: "Feb 2026 - Jul 2026 · 6 mos",
    location: "Bekasi, West Java",
    roles: [
      {
        id: "lab-lazarus",
        title: "Laboratory Assistant Information Systems - Lazarus Programming",
        period: "Feb 2026 - Jul 2026 · 6 mos",
        responsibilities: [
          "Guided students in developing desktop applications using Lazarus IDE and Free Pascal.",
          "Assisted students in understanding GUI design and implementing event-driven programming concepts."
        ],
        skills: ["Lazarus", "Free Pascal"]
      },
      {
        id: "lab-vb",
        title: "Laboratory Assistant Information Systems - VB.Net Programming",
        period: "Feb 2026 - Jul 2026 · 6 mos",
        responsibilities: [
          "Assisted VB.Net programming laboratory sessions.",
          "Guided students in developing desktop applications using Visual Basic .NET."
        ],
        skills: ["VB.Net", "Visual Basic .NET"]
      }
    ]
  },
  {
    id: 2,
    company: "PT PLN (Persero)",
    type: "Internship",
    logo: PlnLogo, 
    duration: "Jan 2023 - Mar 2023 · 3 mos",
    location: "Indonesia",
    roles: [
      {
        id: "pln-admin",
        title: "Administrative Intern",
        period: "Jan 2023 - Mar 2023 · 3 mos",
        responsibilities: [
          "Managed and organized administrative documents and payment records.",
          "Verified financial documents and supported data reconciliation processes.",
          "Assisted in preparing financial reports and maintaining daily data accuracy."
        ],
        skills: ["Microsoft Word", "Microsoft Excel", "Administration"]
      },
      {
        id: "pln-kwh",
        title: "KWh Data Entry Intern",
        period: "Jan 2023 - Mar 2023 · 3 mos",
        responsibilities: [
          "Recorded and verified customer KWh data with high accuracy.",
          "Assisted in reconciling billing and electricity consumption reports.",
          "Handled administrative filing and documentation related to meter readings."
        ],
        skills: ["Data Entry", "Microsoft Excel", "Verification"]
      }
    ]
  }
];

// PROJECTS DATA
const projectsData = [
  {
    id: 1,
    title: "Automatic Smart Fish Feeder With Sensor TDS (Quality Water)",
    subtitle: " IoT / Embedded System",
    description: "This device operates by controlling the rotation of a servo motor based on the time stored in an RTC (Real-Time Clock) module. With this system, fish feeding can be carried out regularly—for instance, every morning and evening—without the need for manual intervention. I have also incorporated a temperature sensor (from the RTC module) and a TDS (ppm) sensor to monitor water quality.",
    tags: ["Arduino", "ESP32", "IoT", "Blynk", "C++"],
    codeLink: "https://github.com/arielbryannn/Automatic_Fish_Feeder_Arduino-Project",
    liveLink: "https://drive.google.com/drive/folders/13JJt3-YZPm26AFKHlsiRUl7oPakE00wc?usp=drive_link", // Isi dengan link live demo jika ada, atau biarkan kosong agar tombol live disembunyikan otomatis
    icon: "ri-cpu-line",
    mockupTitle: "IoT / Embedded System",
    images: [Embedded1, Embedded2, Embedded3, Embedded4],
  },
  {
    id: 2,
    title: "Drowsiness Detection System",
    subtitle: "Computer Vision & AI",
    description: "Drowsiness detection using a warning alarm, utilizing AI to measure the Eye Aspect Ratio (EAR).",
    tags: ["Python", "OpenCV", "Computer Vision", "IoT"],
    codeLink: "https://github.com/arielbryannn/Detection-Projects",
    liveLink: "https://drive.google.com/drive/folders/1Azo9G6rTvJ2W5w3W5Fi90Jq4tZoIujub?usp=drive_link",
    icon: "ri-eye-line",
    mockupTitle: "Drowsiness Detection",
    images: [DrowsinessImage],
  },
  {
    id: 3,
    title: "Cisco Enterprise Network Simulation",
    subtitle: "Networking & Infrastructure",
    description: "Creating a network infrastructure topology using Cisco Packet Tracer simulation, featuring four routers with static routing, a DHCP server, and OSPF.",
    tags: ["Cisco", "Networking", "Routing & Switching", "Packet Tracer"],
    codeLink: "https://github.com/arielbryannn/Networking-Project",
    liveLink: "https://drive.google.com/drive/folders/1Jbo7OC0D3fk-HGuK5szsmyR1Zxh3Ucv6?usp=drive_link",
    icon: "ri-global-line",
    mockupTitle: "Network Simulation",
    images: [Cisco1, Cisco2, Cisco3, Cisco4],
  },
  {
    id: 4,
    title: "Hand Gesture Tracking",
    subtitle: "Computer Vision & AI",
    description: "Hand gesture tracking that detects each finger and emits a pre-programmed sound.",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    codeLink: "https://github.com/arielbryannn/Hand-Gesture-Tracking---Computer-Vision-AI-/tree/main",
    liveLink: "https://drive.google.com/drive/folders/1OfF5ksgVQsAGDEgNINPqIua7MC0dNqA6?usp=drive_link",
    icon: "ri-hand-line",
    mockupTitle: "Hand Tracking", 
    images: [HandTrackingImage],
  },
  {
    id: 5,
    title: "Early fire detection with alarms and real-time documentation.",
    subtitle: "Computer Vision & Monitoring",
    description: "detect early fire in real-time using AI and HSV to regulate fire light using camera, as well as alarm and documentation via gmail.",
    tags: ["Python", "OpenCV", "AI", "Computer Vision", "Gmail API"],
    codeLink: "https://github.com/arielbryannn/Detection-Projects/blob/main/deteksi_api_opencv_mediapipe2.py",
    liveLink: "https://drive.google.com/drive/folders/1rqnJtsx2UquZboZFMMzKUIvXysT5rifz?usp=drive_link",
    icon: "ri-fire-line",
    mockupTitle: "Fire Detection",
    images: [Fire1, Fire2, Fire3, Fire4],
  }
];

// SOCIAL MEDIA DATA
const socialLinks = [
  {
    name: "LinkedIn",
    handle: "Ariel Bryan",
    icon: "ri-linkedin-fill",
    url: "https://www.linkedin.com/in/ariel-bryan/",
    color: "hover:bg-blue-950/40 hover:text-blue-400 hover:border-blue-500/50"
  },
  {
    name: "GitHub",
    handle: "@arielbryannn",
    icon: "ri-github-fill",
    url: "https://github.com/arielbryannn/arielbryannn",
    color: "hover:bg-zinc-900/80 hover:text-zinc-200 hover:border-zinc-500/50"
  },
  {
    name: "Instagram",
    handle: "@arielbryannn",
    icon: "ri-instagram-line",
    url: "https://www.instagram.com/arielbryannn",
    color: "hover:bg-red-950/40 hover:text-red-400 hover:border-red-500/50"
  },
  {
    name: "TikTok",
    handle: "@arielbryannn",
    icon: "ri-tiktok-fill",
    url: "https://www.tiktok.com/@arielbryannn",
    color: "hover:bg-stone-900/80 hover:text-stone-200 hover:border-stone-500/50"
  }
];

function App() {
  const [displayedName, setDisplayedName] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); 
  const terminalRef = useRef(null); 
  const fullName = "Hi Everyone! I'm Ariel Fazle Mawla Bryan Adams";

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_xhaqogh";
    const templateID = "template_npepp86";
    const publicKey = "sJnV8bte-ywZ9eTtr";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setIsSubmitting(false);
        setSubmitStatus("Pesan berhasil terkirim ke Gmail! Saya akan membalasnya secepatnya.");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitStatus("Gagal mengirim pesan. Silakan coba lagi nanti.");
        console.error("EmailJS Error:", error);

        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onPointerDown = (e) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const onPointerMove = (e) => {
    if (touchStart !== null) {
      setTouchEnd(e.clientX);
    }
  };

  const onPointerUp = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isRightSwipe) {
      setActiveProject((prev) => (prev + 1) % projectsData.length);
    } else if (isLeftSwipe) {
      setActiveProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const isSwipeLocked = useRef(false);

  const onWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();

      if (isSwipeLocked.current) return;

      if (Math.abs(e.deltaX) > 15) {
        if (e.deltaX > 0) {
          setActiveProject((prev) => (prev + 1) % projectsData.length);
        } else if (e.deltaX < 0) {
          setActiveProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
        }

        isSwipeLocked.current = true;
        setTimeout(() => {
          isSwipeLocked.current = false;
        }, 800);
      }
    }
  };

  const handleScroll = () => {
    if (terminalRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = terminalRef.current;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll > 0) {
        const progress = (scrollTop / maxScroll) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = 0;
      setScrollProgress(0);
    }
    setActiveImageIndex(0);
  }, [activeProject]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedName(fullName.substring(0, index));
        index++;
      } else {
        setIsTypingDone(true);
        clearInterval(typingInterval);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, []);

  const currentProject = projectsData[activeProject];
  const hasImages = currentProject.images && currentProject.images.length > 0;

  return (
    <div className="bg-tech-purple w-full min-h-screen text-white overflow-x-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        
        {/* HERO SECTION */}
        <div id="home" className="hero grid md:grid-cols-2 items-start pt-28 md:pt-36 xl:gap-12 gap-8 grid-cols-1">
          <div className="text-left">
            <h1 
              data-aos="fade-up" 
              className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight min-h-[120px] lg:min-h-[160px] text-left"
            >
              <span className="animate-shiny inline">{displayedName}</span>
              {!isTypingDone && (
                <span className="animate-pulse text-purple-400 font-light ml-1">|</span>
              )}
            </h1>

            {/* SOCIAL MEDIA HERO */}
            <div data-aos="fade-up" className="flex items-center gap-3 mb-6">
              <a 
                href="https://www.linkedin.com/in/ariel-bryan/" 
                target="_blank" 
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-200 hover:text-blue-400 hover:bg-blue-950/40 hover:border-blue-500/50 hover:scale-110 transition duration-300 backdrop-blur-md shadow-lg shadow-purple-950/50"
              >
                <i className="ri-linkedin-fill ri-xl"></i>
              </a>
              <a 
                href="https://www.instagram.com/arielbryannn" 
                target="_blank" 
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-200 hover:text-red-400 hover:bg-red-950/40 hover:border-red-500/50 hover:scale-110 transition duration-300 backdrop-blur-md shadow-lg shadow-purple-950/50"
              >
                <i className="ri-instagram-line ri-xl"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@arielbryannn" 
                target="_blank" 
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-200 hover:text-stone-200 hover:bg-stone-900/80 hover:border-stone-500/50 hover:scale-110 transition duration-300 backdrop-blur-md shadow-lg shadow-purple-950/50"
              >
                <i className="ri-tiktok-fill ri-xl"></i>
              </a>
              <a 
                href="https://github.com/arielbryannn/arielbryannn" 
                target="_blank" 
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-200 hover:text-zinc-200 hover:bg-zinc-900/80 hover:border-zinc-500/50 hover:scale-110 transition duration-300 backdrop-blur-md shadow-lg shadow-purple-950/50"
              >
                <i className="ri-github-fill ri-xl"></i>
              </a>
            </div>

            <p data-aos="fade-up" className="text-base/loose mb-6 opacity-80 text-gray-300 text-left">
              I'm currently an undergraduate student majoring in Computer Systems at Gunadarma University, with a strong interest in networking, embedded systems, and IoT. I am now focusing on deepening my knowledge in these areas, as well as in cloud computing.
            </p>

            <div data-aos="fade-up" className="flex items-center sm:gap-4 gap-2 mb-8">
              <a 
                href="https://drive.google.com/drive/folders/1CoeEW5tmZsiu0s2UbaQSuXMe6D3PskOV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gradient-purple font-semibold px-6 py-4 rounded-2xl transition duration-300 flex items-center gap-2"
              >
                Download CV <i className="ri-download-line ri-lg"></i>
              </a>
              <a 
                href="#project" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
                }} 
                className="btn-secondary-purple px-6 py-4 rounded-2xl flex items-center gap-2 cursor-pointer"
              >
                View Project <i className="ri-arrow-down-line ri-lg"></i>
              </a>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div data-aos="zoom-in" className="relative md:ml-auto w-full max-w-[430px] mx-auto">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 blur-lg opacity-40"></div>
            
            <div className="group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-purple-950/30 backdrop-blur-sm h-[480px] sm:h-[520px] flex justify-center items-end">
              <div className="absolute inset-[1.5px] rounded-[22px] bg-purple-950/40 backdrop-blur-sm pointer-events-none z-10"></div>

              <img 
                src={HeroImage} 
                alt="Ariel Fazle Mawla Bryan Adams" 
                className="w-full h-full object-contain object-bottom origin-bottom transform group-hover:scale-105 transition-transform duration-500 relative z-20" 
              />
            </div>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className="About mt-32 py-10" id="about">
          <h2 data-aos="fade-up" className="text-3xl font-bold mb-8 text-center text-gradient-purple">
            About Me
          </h2>
          <div 
            data-aos="zoom-in" 
            className="bg-purple-950/20 border border-purple-500/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-left space-y-5 shadow-xl transition-all duration-300"
          >
            <p className="text-sm sm:text-base leading-relaxed opacity-85 text-gray-200">
              I am an undergraduate student majoring in Computer Systems at Gunadarma University with a deep interest in Information Technology, specifically in the fields of networking, embedded systems, and the Internet of Things (IoT). I integrate software and hardware to enable complex modern systems to communicate, compute, and operate.
            </p>
            
            <p className="text-sm sm:text-base leading-relaxed opacity-85 text-gray-200">
              I gained industry experience through an internship at PT PLN (Persero) during my vocational high school years. In the networking field, I am skilled in designing, configuring, and troubleshooting network environments using Cisco and MikroTik devices—covering VLANs, DHCP, trunking, bridging, wireless connections, subnetting, and server monitoring, as well as assisting with network development within the school environment. I recently completed a role as an Information Systems Laboratory Assistant at Gunadarma University, where I guided students in understanding basic programming logic and GUI-based object-oriented concepts using Lazarus (Pascal) and Visual Basic .NET.
            </p>
            
            <p className="text-sm sm:text-base leading-relaxed opacity-85 text-gray-200">
              I am consistently dedicated to learning and developing technology solutions, such as the IoT and embedded system-based automatic fish feeder I created as a personal project. The primary goal was to apply embedded system and IoT concepts to create a system that automatically dispenses fish food based on a preset schedule. I designed this device to assist aquarium owners who are not always at home to feed their fish. Powered by Arduino UNO and ESP32, the device ensures regular feeding without direct supervision. I also incorporated an RTC module for temperature sensing and a TDS (ppm) sensor to monitor water quality. Additionally, I have worked on AI and Computer Vision (OpenCV) projects, including early fire detection with alarms and real-time screenshot alerts via Gmail, as well as drowsiness detection based on the Eye Aspect Ratio (EAR). Currently, I am focusing on deepening my expertise in network infrastructure, embedded systems, and cloud computing.
            </p>
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div id="education" className="education mt-32 py-10">
          <h2 data-aos="fade-up" className="text-3xl font-bold mb-8 text-center text-gradient-purple">
            Educational Journey
          </h2>
          
          <div className="flex flex-col items-center">
            {educationData.map((edu, index) => (
              <div key={edu.id} className="w-full flex flex-col items-center">
                <div data-aos="zoom-in" className="w-full bg-purple-950/20 border border-purple-500/20 backdrop-blur-md rounded-2xl p-7 text-left">
                  
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {edu.major}
                    </h3>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-200">
                      {edu.logo ? (
                        <img 
                          src={edu.logo} 
                          alt={edu.institution} 
                          className={`${edu.id === 1 ? 'w-16 h-16' : 'w-11 h-11'} object-contain shrink-0`} 
                        />
                      ) : (
                        <i className="ri-building-line text-2xl text-cyan-400"></i>
                      )}
                      <span className="text-lg md:text-xl font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <i className="ri-calendar-line text-2xl"></i>
                      <span className="text-lg">{edu.year}</span>
                    </div>
                  </div>

                  <div className="relative pl-6 mb-8">
                    <div className="absolute left-0 top-0 h-full w-[3px] bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.7)]"></div>
                    <p className="text-base leading-relaxed text-gray-100 font-medium">
                      {edu.description}
                    </p>
                  </div>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mb-8">
                      <div className="space-y-2">
                        {edu.achievements.map((ach) => (
                          <div key={ach.id} className="flex items-center gap-3 bg-cyan-950/30 border border-cyan-500/20 p-2.5 px-4 rounded-xl w-fit">
                            <i className="ri-award-line text-lg text-cyan-400"></i>
                            <span className="text-cyan-100 font-medium text-sm">{ach.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-purple-950/50 border border-purple-500/10 text-gray-300 px-3.5 py-1 rounded-md text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {index < educationData.length - 1 && (
                  <div data-aos="fade-up" className="w-[3px] h-20 bg-cyan-400 rounded-full my-4 shadow-[0_0_12px_rgba(6,182,212,0.9)]"></div>
                )}

              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <div id="experience" className="experience mt-32 py-10">
          <h2 data-aos="fade-up" className="text-3xl font-bold mb-8 text-center text-gradient-purple">
            Experience
          </h2>

          <div className="flex flex-col items-center">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="w-full flex flex-col items-center">
                <div data-aos="zoom-in" className="w-full bg-purple-950/20 border border-purple-500/20 backdrop-blur-md rounded-2xl p-7 text-left">
                  
                  <div className="flex items-center justify-between border-b border-purple-500/20 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      {exp.logo ? (
                        <img 
                          src={exp.logo} 
                          alt={exp.company} 
                          className={`${exp.id === 1 ? 'w-16 h-16' : 'w-8 h-8'} object-contain shrink-0`} 
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-cyan-400 text-xl">
                          <i className="ri-building-4-line"></i>
                        </div>
                      )}
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                        <span className="text-sm text-purple-300 font-medium">{exp.type}</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 hidden sm:block">{exp.duration}</span>
                  </div>

                  <div className="space-y-8">
                    {exp.roles.map((role) => (
                      <div key={role.id} className="relative pl-6 border-l-2 border-purple-500/30">
                        <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>

                        <h4 className="text-lg md:text-xl font-bold text-white">{role.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-400 mb-3">{role.period}</p>

                        <ul className="list-disc list-inside space-y-1.5 text-gray-100 font-medium text-sm md:text-base leading-relaxed mb-4">
                          {role.responsibilities.map((resp, idx) => (
                            <li key={idx} className="marker:text-cyan-400">{resp}</li>
                          ))}
                        </ul>

                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                          {role.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="bg-cyan-950/40 border border-cyan-500/20 text-cyan-200 px-3 py-1 rounded-lg text-xs font-medium text-center sm:text-left">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {index < experienceData.length - 1 && (
                  <div data-aos="fade-up" className="w-[3px] h-20 bg-cyan-400 rounded-full my-4 shadow-[0_0_12px_rgba(6,182,212,0.9)]"></div>
                )}

              </div>
            ))}
          </div>
        </div>

        {/* TOOLS SECTION */}
        <div id="tools" className="tools mt-32 py-10">
          <h1 data-aos="fade-up" className="text-4xl font-bold mb-2 text-center text-gradient-purple">
            Tools & Tech
          </h1>
          <p data-aos="fade-up" className="w-full text-base opacity-70 text-center mb-6">
            Software, hardware, and tools that I regularly use.
          </p>

          <div data-aos="zoom-in" className="mb-10">
            <IconCloud />
          </div>

          {["Programming & Development", "Networking & Infrastructure", "Embedded System & IoT", "Cloud & DevOps"].map((kat) => (
            <div key={kat} className="mt-12">
              <div data-aos="fade-right" className="flex items-center gap-3 mb-6">
                <i className={`${categoryIcons[kat] || "ri-stack-line text-purple-400"} text-2xl sm:text-3xl`}></i>
                <h2 className="text-lg sm:text-2xl font-bold text-purple-300 text-left">
                  {kat}
                </h2>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 [&>*:nth-last-child(1):nth-child(odd)]:col-span-2 sm:[&>*:nth-last-child(1):nth-child(odd)]:col-span-1">
                {listTools
                  .filter((tool) => tool.kategori === kat)
                  .map((tool) => (
                    <div
                      key={tool.id}
                      data-aos="zoom-in"
                      className="flex items-center gap-3 p-3 border border-purple-500/20 bg-purple-950/20 rounded-xl hover:border-purple-500/50 hover:bg-purple-900/30 transition group min-h-[82px] backdrop-blur-sm"
                    >
                      <img
                        src={tool.gambar}
                        alt={tool.nama}
                        className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 object-contain bg-purple-900/40 p-2 rounded-lg border border-purple-500/20"
                      />
                      <div className="min-w-0 flex-1 pr-1 text-left">
                        <h4 className="text-sm sm:text-base font-medium leading-tight text-gray-200">
                          {tool.nama}
                        </h4>
                        <p className="text-xs sm:text-sm opacity-60 leading-tight mt-1">
                          {tool.ket}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* PROJECT SECTION */}
        <div id="project" className="projects mt-32 py-10">
          <h2 data-aos="fade-up" className="text-3xl font-bold mb-2 text-center text-gradient-purple">
            Featured Projects
          </h2>
          <p data-aos="fade-up" className="text-base opacity-70 text-center mb-12">
            Enjoy explore my projects!
          </p>

          <div 
            data-aos="zoom-in" 
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={() => { setTouchStart(null); setTouchEnd(null); }}
            onWheel={onWheel}
            className="group relative bg-purple-950/30 border border-purple-500/30 backdrop-blur-xl rounded-3xl p-6 md:p-10 overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing select-none"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20">
              
              {/* KOLOM KIRI: TAMPILAN GAMBAR ATAU TERMINAL */}
              <div className="lg:col-span-6 flex items-center justify-center">
                
                {hasImages ? (
                  <div className="relative w-full max-w-[280px] sm:max-w-[310px] flex items-center justify-center">
                    
                    {/* TOMBOL PANAH KIRI (Hanya muncul jika gambar > 1) */}
                    {currentProject.images.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) => (prev === 0 ? currentProject.images.length - 1 : prev - 1));
                        }}
                        className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-900 border border-purple-400/60 flex items-center justify-center text-purple-200 hover:bg-purple-700 hover:text-white hover:scale-110 transition duration-300 shadow-xl cursor-pointer z-30"
                        aria-label="Previous image"
                      >
                        <i className="ri-arrow-left-s-line text-2xl"></i>
                      </button>
                    )}

                    {/* KOTAK MOCKUP UTAMA - 1 BINGKAI UTUH */}
                    <div className="w-full bg-purple-900/40 border border-purple-500/20 rounded-2xl overflow-hidden shadow-inner flex flex-col h-[340px] sm:h-[370px]">
                      <div className="relative flex items-center justify-between px-4 py-3 bg-purple-900/40 border-b border-purple-500/20">
                        <div className="flex items-center gap-2 shrink-0 z-10">
                          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="absolute inset-x-16 text-center pointer-events-none">
                          <span className="text-[11px] sm:text-xs text-gray-400 font-mono truncate block px-2">
                            {currentProject.mockupTitle} {currentProject.images.length > 1 ? `(Photo ${activeImageIndex + 1}/${currentProject.images.length})` : ""}
                          </span>
                        </div>
                        <div className="w-10 shrink-0"></div>
                      </div>

                      {/* IMAGE CONTAINER TRANSPARAN DAN FULL COVER */}
                      <div className="relative flex-1 bg-transparent flex items-center justify-center overflow-hidden">
                        <img 
                          src={currentProject.images[activeImageIndex]} 
                          alt="Project Preview" 
                          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                        />

                        {/* INDIKATOR DOTS DI BAWAH GAMBAR (Hanya jika > 1 gambar) */}
                        {currentProject.images.length > 1 && (
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-purple-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-purple-500/30 z-10">
                            {currentProject.images.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveImageIndex(dotIdx);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                  activeImageIndex === dotIdx ? "w-6 bg-cyan-400" : "w-2 bg-purple-400/50 hover:bg-purple-200"
                                }`}
                                aria-label={`Go to slide ${dotIdx + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* TOMBOL PANAH KANAN (Hanya muncul jika gambar > 1) */}
                    {currentProject.images.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) => (prev === currentProject.images.length - 1 ? 0 : prev + 1));
                        }}
                        className="absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-900 border border-purple-400/60 flex items-center justify-center text-purple-200 hover:bg-purple-700 hover:text-white hover:scale-110 transition duration-300 shadow-xl cursor-pointer z-30"
                        aria-label="Next image"
                      >
                        <i className="ri-arrow-right-s-line text-2xl"></i>
                      </button>
                    )}

                  </div>
                ) : (
                  <div className="w-full flex items-center gap-4">
                    <div className="hidden sm:flex flex-col items-center justify-center h-[320px] sm:h-[380px] py-4">
                      <div className="relative w-[2px] h-full bg-purple-500/35 rounded-full flex items-center justify-center">
                        <div 
                          className="absolute w-3 h-3 bg-purple-950 border-2 border-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-75 ease-out"
                          style={{ top: `${scrollProgress}%`, transform: 'translateY(-50%)' }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex-1 bg-purple-950/60 border border-purple-500/20 rounded-2xl overflow-hidden shadow-inner flex flex-col h-[320px] sm:h-[380px]">
                      <div className="relative flex items-center justify-between px-4 py-3 bg-purple-900/40 border-b border-purple-500/20">
                        <div className="flex items-center gap-2 shrink-0 z-10">
                          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="absolute inset-x-16 text-center pointer-events-none">
                          <span className="text-[11px] sm:text-xs text-gray-400 font-mono truncate block px-2">
                            {currentProject.mockupTitle}
                          </span>
                        </div>
                        <div className="w-10 shrink-0"></div>
                      </div>
                      <div 
                        ref={terminalRef}
                        onScroll={handleScroll}
                        className="p-4 sm:p-6 overflow-y-auto flex-1 font-mono text-xs sm:text-sm text-cyan-300 bg-black/40 text-left [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                      >
                        <div className="flex items-center gap-2 text-gray-400 mb-3 pb-2 border-b border-purple-500/10">
                          <i className="ri-terminal-box-line text-cyan-400 text-lg"></i>
                          <span>Terminal - project_env@ariel:~</span>
                        </div>
                        <pre className="whitespace-pre-wrap leading-relaxed text-purple-200">
                          {currentProject.mockupCode}
                        </pre>
                        <div className="mt-4 flex items-center gap-2 text-cyan-400 animate-pulse">
                          <span>$</span>
                          <span className="w-2 h-4 bg-cyan-400 inline-block"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* KOLOM KANAN */}
              <div className="lg:col-span-6 flex flex-col justify-between text-left">
                
                <div className="flex items-center gap-3 mb-6">
                  {projectsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveProject(idx)}
                      className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                        activeProject === idx 
                          ? "w-10 bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" 
                          : "w-3 bg-purple-900/60 hover:bg-purple-700 border border-purple-500/20"
                      }`}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                  <span className="text-xs font-mono text-gray-400 ml-2">0{activeProject + 1} / 0{projectsData.length}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-purple-300 text-sm font-semibold mb-2">
                    <i className={`${currentProject.icon} text-cyan-400 text-lg`}></i>
                    <span>{currentProject.subtitle}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                    {currentProject.title}
                  </h3>
                  <p className="text-gray-100 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                    {currentProject.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentProject.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-cyan-950/40 border border-cyan-500/20 text-cyan-200 px-3 py-1 rounded-lg text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Tombol Code */}
                    <a 
                      href={currentProject.codeLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-gradient-purple px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 transition duration-300 shadow-lg"
                    >
                      <i className="ri-github-fill text-lg"></i> Code
                    </a>

                    {/* Tombol Live (Hanya dirender jika liveLink terisi) */}
                    {currentProject.liveLink && (
                      <a 
                        href={currentProject.liveLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn-secondary-purple px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 transition duration-300"
                      >
                        <i className="ri-global-line text-lg text-cyan-400"></i> Live
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* CERTIFICATES & AWARDS SECTION */}
        <Certificates />

        {/* CONTACT SECTION */}
        <div id="contact" className="contact mt-32 pb-16">
          
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-gradient-purple mt-2 mb-4">
              Contact
            </h2>
            <p data-aos="fade-up" className="text-gray-300 text-base max-w-lg mx-auto">
              Have a project idea, a question, or just want to connect? Send a message below or connect with me on social media.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* KIRI: CONTACT INFO & SOCIAL MEDIA */}
            <div data-aos="zoom-in" className="lg:col-span-5 space-y-6 text-left">
              
              <div className="bg-purple-950/30 border border-purple-500/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                  I am always open to discussing new ideas, creative projects, or simply collaborating, especially in the field of Information Technology.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition duration-300">
                      <i className="ri-mail-send-line"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Email</p>
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=arielbrayen5@gmail.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-sm font-semibold text-gray-100 hover:text-cyan-400 transition flex items-center gap-1.5"
                      >
                        arielbrayen5@gmail.com <i className="ri-external-link-line text-xs opacity-70"></i>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition duration-300">
                      <i className="ri-map-pin-2-line"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Location</p>
                      <p className="text-sm font-semibold text-gray-100">
                        Bekasi, West Java, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA SECTION */}
              <div className="bg-purple-950/30 border border-purple-500/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-share-line text-cyan-400"></i> Connect With Me
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-xl bg-purple-900/20 border border-purple-500/20 transition duration-300 group ${social.color}`}
                    >
                      <i className={`${social.icon} text-xl text-gray-300 group-hover:scale-110 transition duration-300`}></i>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-white leading-tight truncate">{social.name}</p>
                        <p className="text-[11px] text-gray-400 truncate">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* KANAN: INTERACTIVE CONTACT FORM */}
            <div data-aos="zoom-in" className="lg:col-span-7 bg-purple-950/30 border border-purple-500/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-gray-300 text-sm mb-6">Please fill out the questions below, and I will get back to you as soon as possible.</p>

              {submitStatus && (
                <div className="mb-6 p-4 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-sm flex items-center gap-3 animate-fade-in">
                  <i className="ri-checkbox-circle-line text-xl text-cyan-400"></i>
                  <span>{submitStatus}</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <i className="ri-user-3-line"></i>
                    </div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="name"
                      className="w-full bg-purple-950/50 border border-purple-500/30 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <i className="ri-mail-line"></i>
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="name@example.com"
                      className="w-full bg-purple-950/50 border border-purple-500/30 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-0 pl-4 flex items-start pointer-events-none text-gray-400">
                      <i className="ri-chat-1-line"></i>
                    </div>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Write your message here..."
                      className="w-full bg-purple-950/50 border border-purple-500/30 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gradient-purple py-4 rounded-xl font-semibold transition duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin text-lg"></i> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <i className="ri-send-plane-fill"></i>
                    </>
                  )}
                </button>

              </form>
            </div>

          </div>

        </div>

        {/* FOOTER SECTION */}
        <footer className="w-full py-8 border-t border-purple-500/10 text-center text-xs sm:text-sm text-gray-500">
          <p className="tracking-wide">
            © 2026 Ariel Fazle Mawla Bryan Adams — All writeups and projects are for educational purposes only.
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;