import React, { useState, useEffect, useRef } from "react";
import { homeData } from "../../data/home";

const CountDown = () => {
  const { statistics } = homeData;

  // Extract numeric value and suffix from string like "18+", "20K+", "100%"
  const parseValue = (valueStr) => {
    const numMatch = valueStr.match(/(\d+)/);
    const suffixMatch = valueStr.match(/([^0-9]+)/);
    
    if (!numMatch) return { numeric: 0, suffix: valueStr };
    
    let numeric = parseInt(numMatch[0]);
    const suffix = suffixMatch ? suffixMatch[0] : "";

    // Handle K (thousands)
    if (valueStr.includes("K") || valueStr.includes("k")) {
      numeric = numeric * 1000;
    }

    return { numeric, suffix };
  };

  const [counters, setCounters] = useState(
    statistics.stats.map((stat) => {
      const parsed = parseValue(stat.value);
      return { value: 0, suffix: parsed.suffix };
    })
  );
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = [];
    const timeouts = [];

    statistics.stats.forEach((stat, index) => {
      // Fade-in animation delay + animation duration (0.8s from App.css)
      const fadeInDelay = 0.2 + index * 0.2; // Animation delay for each item
      const fadeInDuration = 0.8; // Animation duration from App.css
      const counterStartDelay = (fadeInDelay + fadeInDuration) * 1000; // Convert to ms

      const timeout = setTimeout(() => {
        const { numeric: targetValue, suffix } = parseValue(stat.value);
        const duration = 2000; // 2 seconds
        const frameTime = 16; // ~60fps
        const totalFrames = Math.ceil(duration / frameTime);
        let currentFrame = 0;

        const interval = setInterval(() => {
          currentFrame++;
          const progress = Math.min(currentFrame / totalFrames, 1);
          
          // Easing function (ease-out)
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(targetValue * easedProgress);

          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = { value: currentValue, suffix };
            return newCounters;
          });

          if (currentFrame >= totalFrames) {
            clearInterval(interval);
            // Ensure final value is set
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = { value: targetValue, suffix };
              return newCounters;
            });
          }
        }, frameTime);

        intervals.push(interval);
      }, counterStartDelay);

      timeouts.push(timeout);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [isVisible, statistics.stats]);

  // Format the displayed value based on suffix
  const formatDisplayValue = (counter, originalValue) => {
    if (!counter) return originalValue;
    
    const { value, suffix } = counter;
    
    if (originalValue.includes("K") || originalValue.includes("k")) {
      const displayValue = value >= 1000 ? `${value / 1000}K` : value;
      return `${displayValue}${suffix.replace("K", "").replace("k", "")}`;
    }
    
    if (originalValue.includes("+")) {
      return `${value}+`;
    }
    
    if (originalValue.includes("%")) {
      return `${value}%`;
    }
    
    return `${value}${suffix}`;
  };

  return (
    <>
      <div
        ref={sectionRef}
        className="py-10 lg:py-20 bg-black border-t border-b border-transparent
            [border-image:linear-gradient(180deg,rgba(89,89,89,0.82)_0%,#1D1D1D_100%)_1]"
      >
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20">
            {statistics.stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center animate-fade-in-up"
                style={{
                  animationDelay: `${0.2 + index * 0.2}s`,
                  opacity: 0,
                }}
              >
                <h3 className="text-gradient-gold text-xl lg:text-[32px] font-bold mb-2">
                  {formatDisplayValue(counters[index], stat.value)}
                </h3>
                <p className="text-[#DBDBDB] text-base uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDown;
