import React, { useEffect, useRef, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

interface Link {
  title: string;
  url: string;
}

interface NavbarProps {
  title: string;
  links: Link[];
}

const Navbar: React.FC<NavbarProps> = ({ title, links }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation(); 
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        event.target !== containerRef.current
      ) {
        setMenuOpen(false);
      }
    };

    const handleWindowClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    containerRef.current?.addEventListener('click', handleClickOutside);
    window.addEventListener('click', handleWindowClick);

    return () => {
      containerRef.current?.removeEventListener('click', handleClickOutside);
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <div id="container" ref={containerRef}>
      <nav className="fixed top-0 left-0 right-0 bg-[#00A6FB] p-4 rounded-lg mt-6 mx-4 flex justify-between items-center h-16 shadow-lg z-50">
        <a
          href="/"
          className="rounded-lg bg-[#001427] px-4 py-2 transition-all duration-300 hover:bg-[#0054A2] hover:scale-105 cursor-pointer"
        >
          <div className="text-[#DBDFAC] text-xl">{title}</div>
        </a>
        <div className="relative">
          <button
            className="bg-[#001427] text-white py-2 px-3 rounded-full focus:outline-none flex items-center transition-all duration-300 hover:bg-[#0054A2] hover:scale-110"
            onClick={toggleMenu}
          >
            <HiMenuAlt3 className="text-xl" />
          </button>
          {menuOpen && (
            <ul
              className="absolute right-0 mt-2 bg-[#DBDFAC] shadow rounded"
              ref={menuRef}
            >
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    className="px-4 py-2 block hover:bg-[#0054A2] rounded"
                    href={link.url}
                  >
                    <span className="text-[#001427]">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
