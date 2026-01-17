import React from "react";
import { Skeleton } from "primereact/skeleton";

const LuxuryWatchesSkeleton = () => {
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
      <div className="py-5 sm:py-20 bg-black relative overflow-hidden">
        {/* Decorative blurred ellipse */}
        <div
          className="absolute w-1/4 h-50 rounded-full opacity-30 "
          style={{
            backgroundColor: "#A08122",
            top: "-25px",
            left: "28%",
            transform: "translateX(200px)",
            filter: "blur(80px)",
          }}
        ></div>

        {/* Title and Description Skeleton */}
        <div className="bg-black py-14 flex flex-col gap-8">
          {/* Title Skeleton */}
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

          {/* Description Skeleton */}
          <div className="flex justify-center">
            <div className="relative overflow-hidden max-w-120 mx-auto">
              <Skeleton
                width="600px"
                height="24px"
                className="bg-[#1F1F1F] rounded glow-effect"
                animation="wave"
              />
              <div className="absolute inset-0 shimmer-effect">
                <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Luxury Watches Cards Grid Skeleton */}
        <div className="container">
          <div className="grid grid-cols-12 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-[rgba(251,176,59,0.3)] via-[rgba(251,176,59,0.1)] to-[rgba(251,176,59,0.3)] rounded-xl blur-md opacity-40 animate-pulse"></div>
                
                {/* Card Skeleton */}
                <div className="relative z-10 glow-effect">
                  <div className="flex flex-col items-center justify-center gap-4 bg-[#111111] w-full h-48 rounded-xl p-4">
                    {/* Icon Container Skeleton */}
                    <div className="relative overflow-hidden">
                      <Skeleton
                        width="71px"
                        height="69px"
                        className="bg-[#1F1F1F] rounded-xl"
                        animation="wave"
                      />
                      <div className="absolute inset-0 shimmer-effect">
                        <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                      </div>
                    </div>
                    
                    {/* Label Skeleton */}
                    <div className="relative overflow-hidden w-24">
                      <Skeleton
                        width="96px"
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
                
                {/* Moving shimmer effect on card */}
                <div className="absolute inset-0 shimmer-effect z-20 pointer-events-none rounded-xl">
                  <div
                    className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"
                    style={{
                      animationDelay: `${index * 0.15}s`,
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

export default LuxuryWatchesSkeleton;
