import React from "react";
import { Skeleton } from "primereact/skeleton";

const HowItWorksSkeleton = () => {
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
      <div className="py-10 sm:py-20 bg-black">
        <div className="container">
          <div className="flex flex-col gap-17.5">
            {/* Title Skeleton with glow effect */}
            <div className="flex justify-center">
              <div className="relative overflow-hidden">
                <Skeleton
                  width="300px"
                  height="48px"
                  className="bg-[#1F1F1F] rounded glow-effect"
                  animation="wave"
                />
                <div className="absolute inset-0 shimmer-effect">
                  <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Steps Cards Grid Skeleton */}
            <div className="grid grid-cols-12 xl:gap-18.5">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 mb-6 xl:mb-0 relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex flex-col items-center justify-center gap-2.5">
                    {/* Outer glow effect */}
                    <div className="absolute -inset-1 bg-linear-to-r from-[rgba(251,176,59,0.3)] via-[rgba(251,176,59,0.1)] to-[rgba(251,176,59,0.3)] rounded-full blur-md opacity-40 animate-pulse"></div>

                    {/* Circular Number Badge Skeleton */}
                    <div className="relative z-10 glow-effect">
                      <Skeleton
                        width="68px"
                        height="66px"
                        shape="circle"
                        className="bg-[#1F1F1F]"
                        animation="wave"
                      />
                      <div className="absolute inset-0 shimmer-effect">
                        <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                      </div>
                    </div>

                    {/* Title Skeleton */}
                    <div className="relative overflow-hidden w-24">
                      <Skeleton
                        width="96px"
                        height="28px"
                        className="bg-[#1F1F1F] rounded glow-effect"
                        animation="wave"
                      />
                      <div className="absolute inset-0 shimmer-effect">
                        <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                      </div>
                    </div>

                    {/* Description Skeleton */}
                    <div className="relative overflow-hidden w-full max-w-64">
                      <Skeleton
                        width="100%"
                        height="60px"
                        className="bg-[#1F1F1F] rounded glow-effect"
                        animation="wave"
                      />
                      <div className="absolute inset-0 shimmer-effect">
                        <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Moving shimmer effect on card */}
                  <div
                    className="absolute inset-0 shimmer-effect z-20 pointer-events-none"
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorksSkeleton;
