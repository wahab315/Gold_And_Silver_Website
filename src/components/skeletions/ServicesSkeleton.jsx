import React from "react";
import { Skeleton } from "primereact/skeleton";

const ServicesSkeleton = () => {
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
      <div className="bg-black py-15 xl:py-30">
        <div className="container">
          {/* Services top skeleton */}
          <div className="flex flex-col gap-4 text-center">
            {/* Header skeleton */}
            <div className="flex justify-center">
              <div className="relative overflow-hidden">
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
            </div>

            {/* Title skeleton */}
            <div className="flex justify-center">
              <div className="relative overflow-hidden">
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
            </div>

            {/* Description skeleton */}
            <div className="flex justify-center">
              <div className="relative overflow-hidden lg:w-[50%]">
                <Skeleton
                  width="100%"
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

          {/* Services cards skeleton */}
          <div className="grid grid-cols-12 gap-6 mt-10 xl:mt-16">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 xl:col-span-4 rounded-2xl relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-[rgba(251,176,59,0.3)] via-[rgba(251,176,59,0.1)] to-[rgba(251,176,59,0.3)] rounded-2xl blur-md opacity-40 animate-pulse"></div>

                {/* Card container */}
                <div className="bg-[#111111] shadow-[0px_1px_9.4px_0px_#6F58134D] rounded-2xl py-10 flex flex-col items-center relative z-10 glow-effect">
                  {/* Icon container skeleton */}
                  <div className="relative overflow-hidden mb-2">
                    <div className="bg-[#39311D] w-18 h-19.5 flex items-center justify-center rounded-[21px]">
                      <Skeleton
                        width="43px"
                        height="43px"
                        className="bg-[#1F1F1F] rounded-lg"
                        animation="wave"
                      />
                    </div>
                    <div className="absolute inset-0 shimmer-effect">
                      <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                    </div>
                  </div>

                  {/* Title skeleton */}
                  <div className="flex flex-col gap-2 text-center w-full px-4">
                    <div className="relative overflow-hidden">
                      <Skeleton
                        width="150px"
                        height="28px"
                        className="bg-[#1F1F1F] rounded mx-auto"
                        animation="wave"
                      />
                      <div className="absolute inset-0 shimmer-effect">
                        <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
                      </div>
                    </div>

                    {/* Description skeleton */}
                    <div className="relative overflow-hidden px-16 lg:px-26.75">
                      <Skeleton
                        width="100%"
                        height="20px"
                        className="bg-[#1F1F1F] rounded mb-2"
                        animation="wave"
                      />
                      <Skeleton
                        width="80%"
                        height="20px"
                        className="bg-[#1F1F1F] rounded mx-auto"
                        animation="wave"
                      />
                      <div className="absolute inset-0 shimmer-effect">
                        <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Moving shimmer effect for card */}
                <div className="absolute inset-0 shimmer-effect z-20 pointer-events-none">
                  <div
                    className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.2)] to-transparent"
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

export default ServicesSkeleton;
