import React, { useEffect, useRef, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: 'easeInOutQuart' });
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        event.target !== containerRef.current
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  const menuItems = [
    { id: 'homepage', text: 'Home' },
    { id: 'portfolio', text: 'Portfolio' },
    { id: 'about', text: 'About' },
    { id: 'contact', text: 'Contact' },
  ];

  const renderMenuItems = () =>
    menuItems.map((item) => (
      <li key={item.id}>
        <ScrollLink
          to={item.id}
          smooth={true}
          duration={500}
          onClick={scrollToTop}
          className="px-4 py-2 block hover:bg-[#0054A2] rounded"
        >
          <span className="text-[#001427]">{item.text}</span>
        </ScrollLink>
      </li>
    ));

  return (
    <div id="container" ref={containerRef}>
      <nav className="fixed top-0 left-0 right-0 bg-[#00A6FB] p-4 rounded-lg mt-6 mx-4 flex justify-between items-center h-16 shadow-lg z-50">
        <div
          onClick={scrollToTop}
          className="rounded-lg bg-[#001427] px-4 py-2 transition-all duration-300 hover:bg-[#0054A2] hover:scale-105 cursor-pointer"
        >
          <div className="text-[#DBDFAC] text-xl">{title}</div>
        </div>
        <div className="relative">
          <button
            className="bg-[#001427] text-white py-2 px-3 rounded-full focus:outline-none flex items-center transition-all duration-300 hover:bg-[#0054A2] hover:scale-110"
            onClick={toggleMenu}
          >
            <HiMenuAlt3 className="text-xl" />
          </button>
          {menuOpen && (
            <ul className="absolute right-0 mt-2 bg-[#DBDFAC] shadow rounded" ref={menuRef}>
              {renderMenuItems()}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
