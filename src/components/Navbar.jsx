import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: "ri-home-4-line" },
    { name: "About", href: "#about", id: "about", icon: "ri-user-line" },
    { name: "Education", href: "#education", id: "education", icon: "ri-graduation-cap-line" },
    { name: "Experience", href: "#experience", id: "experience", icon: "ri-briefcase-line" },
    { name: "Tools", href: "#tools", id: "tools", icon: "ri-tools-line" },
    { name: "Projects", href: "#project", id: "project", icon: "ri-code-box-line" },
    { name: "Certificates", href: "#certificates-awards", id: "certificates-awards", icon: "ri-award-line" },
    { name: "Contact", href: "#contact", id: "contact", icon: "ri-mail-send-line" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }

      const scrollPosition = window.scrollY + 250;

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(targetId);

    if (targetId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 80;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        active
          ? "bg-[#0c0714]/95 dark:bg-[#0b0712]/95 backdrop-blur-md border-b border-purple-500/10 py-3 shadow-lg shadow-purple-950/30"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-8 md:px-12 flex items-center justify-between gap-4">
        
        {/* SISI KIRI: LOGO */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide cursor-pointer block text-left leading-none"
          >
            My Portfolio
          </a>
        </div>

        {/* SISI KANAN: HAMBURGER (MOBILE) + KAPSUL MENU NAVBAR + TOMBOL TEMA */}
        <div className="flex items-center gap-3">
          
          {/* MENU NAVBAR KAPSUL COMPACT */}
          <ul
            className={`
              flex items-center
              /* Mobile Style */
              flex-col absolute top-[60px] left-0 w-full p-6 gap-2
              bg-[#0c0714]/98 dark:bg-[#0b0712]/98 backdrop-blur-lg border-b border-purple-500/25
              transition-all duration-300 ease-in-out
              ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}

              /* Desktop Style */
              lg:flex-row lg:static lg:w-auto lg:p-1 lg:gap-0.5 lg:border lg:border-purple-500/30 lg:rounded-full lg:bg-[#120a1f]/80 lg:backdrop-blur-md lg:shadow-lg lg:opacity-100 lg:visible lg:translate-y-0
            `}
          >
            {navLinks.map((link) => {
              const isCurrentActive = activeSection === link.id;

              return (
                <li key={link.id} className="relative flex flex-col items-center justify-center w-full lg:w-auto">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`relative font-medium flex items-center justify-center py-3 lg:py-1.5 lg:px-3 cursor-pointer w-full lg:w-auto rounded-full ${
                      isCurrentActive
                        ? "lg:bg-purple-600/30 lg:border lg:border-purple-500/50 text-purple-200 text-purple-300"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    } text-lg lg:text-xs xl:text-sm`}
                  >
                    <span className="relative flex items-center gap-1.5 pb-0.5">
                      <i className={`${link.icon} text-xl lg:text-sm`}></i>
                      <span>{link.name}</span>

                      {/* GARIS BAWAH AKTIF */}
                      {isCurrentActive && (
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-purple-500 rounded-full" />
                      )}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* TOMBOL TEMA DI SEBELAH KANAN NAVBAR */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-10 h-10 rounded-full bg-[#120a1f]/80 text-purple-300 flex items-center justify-center cursor-pointer focus:outline-none border border-purple-500/30 backdrop-blur-md shadow-lg overflow-hidden flex-shrink-0"
          >
            {isDark ? (
              <i className="ri-sun-fill text-xl text-amber-400"></i>
            ) : (
              <i className="ri-moon-line text-xl text-purple-300"></i>
            )}
          </button>

          {/* TOMBOL HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-3xl focus:outline-none flex-shrink-0 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
          </button>

        </div>

      </div>
    </header>
  );
};

Navbar.displayName = "Navbar";

export default Navbar;
