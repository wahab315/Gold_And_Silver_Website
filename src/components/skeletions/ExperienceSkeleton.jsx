import React from "react";
import { Skeleton } from "primereact/skeleton";
import { assets } from "../../constants/assets";

const ExperienceSkeleton = () => {
  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .shimmer-effect {
            animation: shimmer 2s infinite;
          }
          @keyframes glow {
            0%, 100% {
              opacity: 0.3;
              box-shadow: 0 0 8px rgba(251, 176, 59, 0.12);
            }
            50% {
              opacity: 0.6;
              box-shadow: 0 0 16px rgba(251, 176, 59, 0.25);
            }
          }
          .glow-effect {
            animation: glow 2s ease-in-out infinite;
          }
        `}
      </style>
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
          {/* Top section skeleton */}
          <div className="flex flex-col gap-6">
            {/* Title skeleton */}
            <div className="flex justify-center">
              <div className="relative overflow-hidden">
                <Skeleton
                  width="400px"
                  height="48px"
                  className="bg-[#1F1F1F] rounded glow-effect"
                  animation="wave"
                />
                <div className="absolute inset-0 shimmer-effect">
                  <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Description skeleton */}
            <div className="flex justify-center">
              <div className="relative overflow-hidden max-w-2xl w-full">
                <Skeleton
                  width="100%"
                  height="24px"
                  className="bg-[#1F1F1F] rounded"
                  animation="wave"
                />
                <div className="absolute inset-0 shimmer-effect">
                  <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Download buttons skeleton */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[1, 2].map((index) => (
              <div
                key={index}
                className="relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-[rgba(251,176,59,0.3)] via-[rgba(251,176,59,0.1)] to-[rgba(251,176,59,0.3)] rounded-lg blur-md opacity-40 animate-pulse"></div>
                
                {/* App download button skeleton */}
                <div className="relative z-10 glow-effect">
                  <Skeleton
                    width="180px"
                    height="60px"
                    className="bg-[#1F1F1F] rounded-lg"
                    animation="wave"
                  />
                </div>
                
                {/* Moving shimmer effect */}
                <div className="absolute inset-0 shimmer-effect z-20 pointer-events-none">
                  <div
                    className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSkeleton;
