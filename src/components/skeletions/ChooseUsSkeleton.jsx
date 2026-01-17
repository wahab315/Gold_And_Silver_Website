import React from "react";
import { Skeleton } from "primereact/skeleton";

const ChooseUsSkeleton = () => {
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
        className="bg-black py-17.5 border-t border-b border-transparent
            [border-image:linear-gradient(180deg,#A08122_0%,#6F5813_100%)_1]"
      >
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-10 items-center">
            {/* Left Panel - Experience Highlight Skeleton */}
            <div className="col-span-12 lg:col-span-6 xl:mx-auto">
              <div className="relative w-full xl:w-100 h-90.75 rounded-2xl p-0.5 bg-linear-to-b from-[#A08122] to-[#6F5813]">
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-[rgba(251,176,59,0.3)] via-[rgba(251,176,59,0.1)] to-[rgba(251,176,59,0.3)] rounded-2xl blur-md opacity-40 animate-pulse"></div>
                
                <div className="w-full h-full bg-[#1B170C] rounded-2xl flex items-center justify-center relative z-10 glow-effect">
                  {/* Shield icon skeleton */}
                  <div className="relative overflow-hidden">
                    <Skeleton
                      width="128px"
                      height="128px"
                      className="bg-[#1F1F1F] rounded-lg"
                      animation="wave"
                    />
                    <div className="absolute inset-0 shimmer-effect">
                      <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Experience badge skeleton */}
                  <div className="absolute top-72 right-0 xl:left-64 w-46.5 h-23.25 bg-[linear-gradient(256.9deg,#B18325_6.41%,#D7BF75_98.66%)] rounded-2xl flex flex-col items-center justify-center overflow-hidden">
                    <Skeleton
                      width="60px"
                      height="48px"
                      className="bg-[#1F1F1F] rounded mb-1"
                      animation="wave"
                    />
                    <Skeleton
                      width="120px"
                      height="20px"
                      className="bg-[#1F1F1F] rounded"
                      animation="wave"
                    />
                    <div className="absolute inset-0 shimmer-effect">
                      <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(0,0,0,0.2)] to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Area Skeleton */}
            <div className="col-span-12 lg:col-span-6 mt-20 lg:mt-0">
              <div className="">
                {/* Header skeleton */}
                <div className="relative overflow-hidden mb-4">
                  <Skeleton
                    width="150px"
                    height="20px"
                    className="bg-[#1F1F1F] rounded glow-effect"
                    animation="wave"
                  />
                  <div className="absolute inset-0 shimmer-effect">
                    <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
                  </div>
                </div>

                {/* Title skeleton */}
                <div className="relative overflow-hidden mb-5">
                  <Skeleton
                    width="350px"
                    height="48px"
                    className="bg-[#1F1F1F] rounded glow-effect"
                    animation="wave"
                  />
                  <div className="absolute inset-0 shimmer-effect">
                    <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
                  </div>
                </div>

                {/* Description skeleton */}
                <div className="relative overflow-hidden mb-8">
                  <Skeleton
                    width="100%"
                    height="24px"
                    className="bg-[#1F1F1F] rounded mb-2"
                    animation="wave"
                  />
                  <Skeleton
                    width="90%"
                    height="24px"
                    className="bg-[#1F1F1F] rounded"
                    animation="wave"
                  />
                  <div className="absolute inset-0 shimmer-effect">
                    <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                  </div>
                </div>

                {/* Benefits List Skeleton */}
                <div className="flex flex-col gap-5">
                  {[1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 relative"
                      style={{
                        animationDelay: `${index * 0.15}s`,
                      }}
                    >
                      {/* Icon container skeleton */}
                      <div className="w-13.25 h-13.25 bg-[#39311D] rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden glow-effect">
                        <Skeleton
                          width="28px"
                          height="28px"
                          className="bg-[#1F1F1F] rounded-lg"
                          animation="wave"
                        />
                        <div className="absolute inset-0 shimmer-effect">
                          <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                        </div>
                      </div>

                      {/* Text content skeleton */}
                      <div className="flex-1">
                        {/* Title skeleton */}
                        <div className="relative overflow-hidden mb-2">
                          <Skeleton
                            width="200px"
                            height="28px"
                            className="bg-[#1F1F1F] rounded"
                            animation="wave"
                          />
                          <div className="absolute inset-0 shimmer-effect">
                            <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
                          </div>
                        </div>

                        {/* Description skeleton */}
                        <div className="relative overflow-hidden">
                          <Skeleton
                            width="100%"
                            height="20px"
                            className="bg-[#1F1F1F] rounded"
                            animation="wave"
                          />
                          <div className="absolute inset-0 shimmer-effect">
                            <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUsSkeleton;
