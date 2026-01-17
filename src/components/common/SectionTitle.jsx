import React from "react";

const SectionTitle = ({
  miniTitle,
  mainTitle,
  highlightTitle,
  description,
  backgroundGradient = "linear-gradient(134.45deg, rgba(215, 191, 117, 0.3825) -10.99%, rgba(0, 0, 0, 0.36) 56.8%)",
}) => {
  return (
    <div
      className="py-15 md:py-36 flex flex-col gap-4 text-center"
      style={{
        backgroundColor: "#000000",
        backgroundImage: backgroundGradient,
      }}
    >
      {miniTitle && (
        <h3
          className="text-gradient-gold text-base font-medium animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          {miniTitle}
        </h3>
      )}
      <h1
        className="text-3xl sm:text-5xl md:text-[58px] text-[#DBDBDB]! font-semibold lg:w-[80%] xl:w-[50%] mx-auto font-playfair-display animate-fade-in-up"
        style={{ animationDelay: "0.4s", opacity: 0 }}
      >
        {mainTitle && <span>{mainTitle} </span>}
        {highlightTitle && (
          <span
            className="text-gradient-gold animate-fade-in"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            {highlightTitle}
          </span>
        )}
      </h1>
      {description && (
        <p
          className="text-base sm:text-xl text-[#DBDBDB] md:w-[70%] lg:w-[50%] xl:w-[60%] mx-auto font-pro-display max-w-150 animate-fade-in-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
