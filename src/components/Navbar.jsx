import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true)
            } else {
                setActive(false)
            }
        }
        
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    
    return (
      <div className="navbar py-7 flex items-center justify-between">
        <div className="logo">
            <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent
            md:text-white">Portfolio</h1>
        </div>
          
        <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 
        md:translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl
        rounded-bl-2xl md:bg-transparent transition-all md:transition-none ${
            active ? "top-0 opacity-100" 
        : "-top-10 opacity-0"}`}>
          <li>  
            <a href="#home" className="sm:text-lg text-base font-medium">Home</a>
          </li>
          <li>
            <a href="#about" className="sm:text-lg text-base font-medium">About</a>
          </li>
          <li>
            <a href="#project" className="sm:text-lg text-base font-medium">Project</a>
          </li>
          <li>
            <a href="#contact" className="sm:text-lg text-base font-medium">Contact</a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Navbar;