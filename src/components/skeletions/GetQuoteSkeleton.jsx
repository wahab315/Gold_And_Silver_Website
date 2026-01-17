import React from "react";
import { Skeleton } from "primereact/skeleton";

const GetQuoteSkeleton = () => {
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
      <div className="py-15 xl:py-30 bg-black">
        <div className="container">
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
              <div className="relative overflow-hidden max-w-162.5 w-full">
                <Skeleton
                  width="100%"
                  height="24px"
                  className="bg-[#1F1F1F] rounded mb-2"
                  animation="wave"
                />
                <Skeleton
                  width="90%"
                  height="24px"
                  className="bg-[#1F1F1F] rounded mx-auto"
                  animation="wave"
                />
                <div className="absolute inset-0 shimmer-effect">
                  <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons group skeleton */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-7 md:mt-14">
            {/* Get Free Quote button skeleton */}
            <div className="relative overflow-hidden">
              <div className="absolute -inset-1 bg-linear-to-r from-[rgba(251,176,59,0.3)] via-[rgba(251,176,59,0.1)] to-[rgba(251,176,59,0.3)] rounded-[50px] blur-md opacity-40 animate-pulse"></div>
              <Skeleton
                width="264px"
                height="58px"
                className="bg-[#1F1F1F] rounded-[50px] glow-effect"
                animation="wave"
              />
              <div className="absolute inset-0 shimmer-effect">
                <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
              </div>
            </div>

            {/* Browse Collection button skeleton */}
            <div className="relative overflow-hidden">
              <div className="absolute -inset-1  bg-linear-to-r from-[rgba(251,176,59,0.3)] via-[rgba(251,176,59,0.1)] to-[rgba(251,176,59,0.3)] rounded-[50px] blur-md opacity-40 animate-pulse"></div>
              <div className="rounded-[50px] p-0.5 bg-linear-to-b from-[#A08122] to-[#6F5813]">
                <Skeleton
                  width="264px"
                  height="58px"
                  className="bg-[#1F1F1F] rounded-[50px] glow-effect"
                  animation="wave"
                />
              </div>
              <div className="absolute inset-0 shimmer-effect">
                <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetQuoteSkeleton;
