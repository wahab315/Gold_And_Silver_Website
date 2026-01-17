import React from "react";
import { Link, useLocation } from "react-router-dom";
import { headerData } from "../../data/header.js";
import ROUTES from "../../constants/routes.js";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className="hidden lg:block bg-[rgba(0,0,0,1)] border-b border-black text-white">
        {/* container */}
        <div className="container flex items-center justify-between py-6">
          {/* logo */}
          <Link
            to={ROUTES.HOME}
            className={`py-2.25 px-3 border border-[#B08E22] text-2xl font-semibold font-playfair-display capitalize ${
              location.pathname === ROUTES.HOME
                ? "text-gradient-gold"
                : "text-gradient-gold"
            }`}
          >
            g <span>/s</span>
          </Link>
          {/* navigation */}
          <nav>
            <ul className="flex items-center gap-8.75">
              {headerData.navigation.map((item, index) => {
                const isActive = location.pathname === item.to;
                return (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className={`font-pro-display text-base transition-colors ${
                        isActive ? "text-gradient-gold" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* authentication */}
          <div className="flex items-center gap-4">
            {headerData.authentication.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  to={item.to}
                  className={
                    item.label === "SIGN UP"
                      ? "inline-flex items-center justify-center text-black text-base bg-[linear-gradient(256.9deg,#B18325_6.41%,#D7BF75_98.66%)] w-25 h-8.75! rounded-[50px]"
                      : "text-white text-base"
                  }
                >
                  {item.label}
                </Link>
                {index === 0 && (
                  <div className="h-8.75 w-px bg-[#B08E22]"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
