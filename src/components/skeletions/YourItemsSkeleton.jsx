import React from "react";
import { Skeleton } from "primereact/skeleton";

const YourItemsSkeleton = () => {
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
      <div className="bg-black lg:py-20">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-10 items-center">
            {/* left Panel Skeleton */}
            <div className="col-span-12 lg:col-span-6 mt-20 lg:mt-0">
              <div className="">
                {/* Header skeleton */}
                <div className="relative overflow-hidden mb-4">
                  <Skeleton
                    width="180px"
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
                    width="100%"
                    height="48px"
                    className="bg-[#1F1F1F] rounded glow-effect"
                    animation="wave"
                  />
                  <div className="absolute inset-0 shimmer-effect">
                    <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                  </div>
                </div>

                {/* Description skeleton */}
                <div className="relative overflow-hidden mb-5">
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

                {/* Features List skeleton */}
                <ul className="flex flex-col gap-3.5 mt-5">
                  {[1, 2, 3, 4].map((index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2.5 relative overflow-hidden"
                      style={{
                        animationDelay: `${index * 0.15}s`,
                      }}
                    >
                      {/* Tick icon skeleton */}
                      <div className="relative overflow-hidden">
                        <Skeleton
                          width="20px"
                          height="20px"
                          className="bg-[#1F1F1F] rounded glow-effect"
                          animation="wave"
                        />
                        <div className="absolute inset-0 shimmer-effect">
                          <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                        </div>
                      </div>
                      {/* Feature text skeleton */}
                      <div className="relative overflow-hidden flex-1">
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
                    </li>
                  ))}
                </ul>

                {/* Button skeleton */}
                <div className="mt-8 relative overflow-hidden inline-flex">
                  <div className="absolute -inset-1 bg-linear-to-r from-[rgba(251,176,59,0.3)] via-[rgba(251,176,59,0.1)] to-[rgba(251,176,59,0.3)] rounded-[50px] blur-md opacity-40 animate-pulse"></div>
                  <Skeleton
                    width="173px"
                    height="58px"
                    className="bg-[#1F1F1F] rounded-[50px] glow-effect"
                    animation="wave"
                    style={{ borderRadius: "50px" }}
                  />
                  <div className="absolute inset-0 shimmer-effect">
                    <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent rounded-[50px]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* right Panel Skeleton */}
            <div className="col-span-12 lg:col-span-6 xl:mx-auto mt-10 lg:mt-0">
              <div className="relative w-full xl:w-100 h-80 rounded-2xl p-0.5 bg-linear-to-b from-[#A08122] to-[#6F5813]">
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-[rgba(251,176,59,0.3)] via-[rgba(251,176,59,0.1)] to-[rgba(251,176,59,0.3)] rounded-2xl blur-md opacity-40 animate-pulse"></div>
                
                <div className="w-full h-full bg-[#1B170C] rounded-2xl flex items-center justify-center relative z-10 glow-effect">
                  {/* Icon skeleton */}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourItemsSkeleton;
