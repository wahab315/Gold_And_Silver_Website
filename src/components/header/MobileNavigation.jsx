import React, { useEffect, useState } from "react";
import ROUTES from "../../constants/routes.js";
import { Link, useLocation } from "react-router-dom";
import { headerData } from "../../data/header.js";

const MobileNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  return (
    <>
      <div className="lg:hidden bg-[rgba(0,0,0,1)]">
        <div className="container flex items-center justify-between py-3">
          {/* logo */}
          <Link
            to={ROUTES.HOME}
            className="py-2.25 px-3 border border-[#B08E22] text-2xl font-semibold font-playfair-display capitalize text-gradient-gold"
          >
            g <span>/s</span>
          </Link>

          {/* Mobile Overlay */}
          {menuOpen && (
            <div
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/80 transform transition-all duration-500 ease-in-out z-20 xl:hidden"
            ></div>
          )}

          {/* Navbar */}
          <nav
            className={`fixed top-0 left-0 w-80 bg-white h-screen overflow-hidden transform transition-all duration-500 ease-in-out z-50
                        ${
                          menuOpen
                            ? "translate-x-0 opacity-100 visible"
                            : "-translate-x-full opacity-0 invisible"
                        }
                    `}
          >
            {/* Close button */}
            <div
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-end border-b border-[#B08E22]"
            >
              <p className="size-12.5 border-l border-[#B08E22] cursor-pointer leading-12.5 text-center text-black text-[25px]">
                ×
              </p>
            </div>
            {/* Navbar items */}
            <ul className="">
              {headerData.navigation.map((item, index) => {
                const isActive = location.pathname === item.to;
                return (
                  <li
                    key={index}
                    className="py-3.75 px-2.5 border-b border-[#B08E22]"
                  >
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className={`text-base font-bold relative transition-all duration-300 ease-in-out ${
                        isActive ? "text-gradient-gold" : "text-black"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* authentication */}
            <div className="flex items-center gap-4 mt-8 px-2">
              {headerData.authentication.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    to={item.to}
                    className="inline-flex items-center justify-center text-black text-base bg-[linear-gradient(256.9deg,#B18325_6.41%,#D7BF75_98.66%)] w-full h-8.75! rounded-[50px]"
                  >
                    {item.label}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </nav>

          {/* Open menu button */}
          <div
            className="flex w-7.5 h-7.5 cursor-pointer items-center justify-center"
            onClick={() => setMenuOpen(true)}
          >
            <span className='block w-7 h-0.5 relative bg-white before:content-[""] before:absolute before:-top-2 before:left-0 before:w-full before:h-full before:bg-white after:content-[""] after:absolute after:top-2 after:left-0 after:w-full after:h-full after:bg-white'></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
