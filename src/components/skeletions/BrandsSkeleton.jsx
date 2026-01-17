import React from "react";
import { Skeleton } from "primereact/skeleton";

const BrandsSkeleton = () => {
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
        className="py-10 bg-black border-t border-b border-transparent
            [border-image:linear-gradient(180deg,rgba(89,89,89,0.82)_0%,#1D1D1D_100%)_1]"
      >
        <div className="container flex flex-col gap-4 xl:gap-7.5">
          {/* Title Skeleton with glow effect */}
          <div className="flex justify-center">
            <div className="relative overflow-hidden">
              <Skeleton
                width="400px"
                height="24px"
                className="bg-[#1F1F1F] rounded glow-effect"
                animation="wave"
              />
              <div className="absolute inset-0 shimmer-effect">
                <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Brands Grid Skeleton with lighting effects */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:gap-x-11.25 lg:gap-y-5">
            {[
              100, 140, 130, 90, 100, 160, 90, 100, 180, 120, 80, 120,
            ].map((width, index) => (
              <div
                key={index}
                className="relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-[rgba(251,176,59,0.3)] via-[rgba(251,176,59,0.1)] to-[rgba(251,176,59,0.3)] rounded blur-md opacity-40 animate-pulse"></div>
                
                {/* Skeleton with shadow and glow */}
                <div className="relative z-10 glow-effect">
                  <Skeleton
                    width={`${width}px`}
                    height="28px"
                    className="bg-[#1F1F1F] rounded"
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

export default BrandsSkeleton;
