import React, { useState, useEffect } from "react";
import { homeData } from "../../data/home";
import { Link } from "react-router-dom";
import { assets } from "../../constants/assets";
import ExperienceSkeleton from "../skeletions/ExperienceSkeleton";

const Experience = () => {
  const [loading, setLoading] = useState(true);
  const { title, description, apps } = homeData.experience;

  useEffect(() => {
    // Simulate loading - you can replace this with actual data fetching logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ExperienceSkeleton />;
  }

  return (
    <>
      <div
        className="py-15 sm:py-30 bg-black border-t border-b border-[#A08122]"
        style={{
          backgroundImage: `url(${assets.experience_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container flex flex-col gap-14">
          {/* Top section */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl sm:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display text-center">
              {title}
            </h1>
            <p className="text-base sm:text-xl text-[#DBDBDB] text-center">{description}</p>
          </div>
          {/* Download wrapper */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {apps.map((app, index) => (
              <Link key={index} to={app.link}>
                <img src={app.icon} alt={app.name} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
