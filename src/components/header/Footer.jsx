import React from "react";
import { homeData } from "../../data/home";
import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";

const Footer = () => {
  const { about, services, company, contact, bottomLink } = homeData.footer;

  return (
    <>
      {/* Footer Top */}
      <div className="bg-black py-15 sm:py-30">
        <div className="container">
          <div className="grid grid-cols-12 gap-6 sm:gap-13.5">
            {/* 1st Column - About */}
            <div className="col-span-12  md:col-span-6 lg:col-span-4">
              <div className="flex flex-col gap-5.5">
                <div className="flex items-center gap-3">
                  {/* logo */}
                  <Link
                    to={ROUTES.HOME}
                    className="py-2.25 px-3 border border-[#B08E22] text-2xl font-semibold font-playfair-display capitalize text-gradient-gold shrink-0"
                  >
                    g <span>/s</span>
                  </Link>
                  <h3 className="text-gradient-gold text-base font-semibold tracking-[0.35em]">
                    {about.companyName}
                  </h3>
                </div>

                <p className="text-[#DBDBDB] text-base">{about.description}</p>

                {/* Social Media Icons */}
                <div className="flex items-center gap-3.5">
                  {about.socialMedia.map((social, index) => (
                    <Link
                      key={index}
                      to={social.link}
                      className="flex items-center justify-center w-10.5 h-10.5 rounded-[10px] bg-[#39311D]"
                    >
                      <img
                        src={social.icon}
                        alt="social media"
                        className="w-6 h-6"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 2nd Column - Services */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 lg:ml-10 xl:col-span-2">
              <div className="flex flex-col gap-6">
                <h3 className="text-gradient-gold text-xl font-medium">
                  {services.title}
                </h3>
                <ul className="flex flex-col gap-3.75">
                  {services.links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.link} className="text-base text-[#DBDBDB]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3rd Column - Company */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2">
              <div className="flex flex-col gap-6">
                <h3 className="text-gradient-gold text-xl font-medium">
                  {company.title}
                </h3>
                <ul className="flex flex-col gap-3.75">
                  {company.links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.link} className="text-base text-[#DBDBDB]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4th Column - Contact */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-4">
              <div className="flex flex-col gap-6">
                <h3 className="text-gradient-gold text-xl font-medium">
                  {contact.title}
                </h3>
                <div className="flex flex-col gap-3.75">
                  <p className="text-base text-[#DBDBDB]">{contact.phone}</p>
                  <Link to="#" className="text-base text-[#DBDBDB]">
                    {contact.email}
                  </Link>
                  <div className="flex flex-col">
                    {contact.address.map((line, index) => (
                      <p key={index} className="text-base text-[#DBDBDB]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div
        className="bg-black py-10 border-t border-b border-transparent
            [border-image:linear-gradient(180deg,rgba(89,89,89,0.82)_0%,#1D1D1D_100%)_1]"
      >
        <div className="container xl:flex xl:items-center xl:justify-between">
          <p
            className="text-base text-center sm:text-xl bg-[linear-gradient(180deg,rgba(89,89,89,0.82)_0%,#1D1D1D_100%)]
            bg-clip-text
            text-transparent"
          >
            {bottomLink.title}
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-6 mt-4 xl:mt-0">
            {bottomLink.links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className="text-base text-center sm:text-xl bg-[linear-gradient(180deg,rgba(89,89,89,0.82)_0%,#1D1D1D_100%)]
                    bg-clip-text
                    text-transparent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
