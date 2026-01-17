import React from "react";
import { Skeleton } from "primereact/skeleton";

const FeaturedCollectionsSkeleton = () => {
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
      <div className="bg-black py-15 xl:py-30 relative overflow-hidden">
        {/* Decorative blurred ellipse */}
        <div
          className="absolute w-1/4 h-50 rounded-full opacity-30"
          style={{
            backgroundColor: "#A08122",
            top: "-25px",
            left: "28%",
            transform: "translateX(200px)",
            filter: "blur(80px)",
          }}
        ></div>
        <div className="container text-white relative z-10">
          {/* Featured header skeleton */}
          <div>
            {/* Header skeleton */}
            <div className="flex justify-center mb-3">
              <div className="relative overflow-hidden">
                <Skeleton
                  width="200px"
                  height="20px"
                  className="bg-[#1F1F1F] rounded glow-effect"
                  animation="wave"
                />
                <div className="absolute inset-0 shimmer-effect">
                  <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Title and View All skeleton */}
            <div className="flex flex-wrap items-center justify-between mt-3">
              <div className="relative overflow-hidden">
                <Skeleton
                  width="250px"
                  height="48px"
                  className="bg-[#1F1F1F] rounded glow-effect"
                  animation="wave"
                />
                <div className="absolute inset-0 shimmer-effect">
                  <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <Skeleton
                  width="100px"
                  height="28px"
                  className="bg-[#1F1F1F] rounded glow-effect"
                  animation="wave"
                />
                <div className="absolute inset-0 shimmer-effect">
                  <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured cards skeleton */}
          <div className="grid grid-cols-12 gap-5 mt-12">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-[rgba(251,176,59,0.3)] via-[rgba(251,176,59,0.1)] to-[rgba(251,176,59,0.3)] rounded-2xl blur-md opacity-40 animate-pulse"></div>

                {/* Card container */}
                <div className="bg-[#111111] rounded-2xl overflow-hidden relative z-10 glow-effect">
                  {/* Image section skeleton */}
                  <div className="relative w-full aspect-308/230 overflow-hidden">
                    <Skeleton
                      width="100%"
                      height="100%"
                      className="bg-[#1F1F1F] rounded-t-2xl"
                      animation="wave"
                    />
                    {/* Tag badge skeleton */}
                    <div className="absolute top-4.25 left-5">
                      <Skeleton
                        width="63px"
                        height="26px"
                        className="bg-[#1F1F1F] rounded-[10px]"
                        animation="wave"
                      />
                    </div>
                    {/* Heart icon skeleton */}
                    <div className="absolute top-4.25 right-5">
                      <Skeleton
                        width="29px"
                        height="29px"
                        className="bg-[#1F1F1F] rounded-full"
                        animation="wave"
                      />
                    </div>
                    {/* Shimmer on image */}
                    <div className="absolute inset-0 shimmer-effect">
                      <div className="h-full w-1/2 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.3)] to-transparent"></div>
                    </div>
                  </div>

                  {/* Content section skeleton */}
                  <div className="px-5 py-8">
                    {/* Name skeleton */}
                    <div className="relative overflow-hidden mb-2">
                      <Skeleton
                        width="180px"
                        height="28px"
                        className="bg-[#1F1F1F] rounded mx-auto"
                        animation="wave"
                      />
                      <div className="absolute inset-0 shimmer-effect">
                        <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
                      </div>
                    </div>

                    {/* Model skeleton */}
                    <div className="relative overflow-hidden mb-2">
                      <Skeleton
                        width="120px"
                        height="20px"
                        className="bg-[#1F1F1F] rounded mx-auto"
                        animation="wave"
                      />
                      <div className="absolute inset-0 shimmer-effect">
                        <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
                      </div>
                    </div>

                    {/* Price skeleton */}
                    <div className="relative overflow-hidden">
                      <Skeleton
                        width="100px"
                        height="28px"
                        className="bg-[#1F1F1F] rounded mx-auto"
                        animation="wave"
                      />
                      <div className="absolute inset-0 shimmer-effect">
                        <div className="h-full w-1/3 bg-linear-to-r from-transparent via-[rgba(251,176,59,0.4)] to-transparent"></div>
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

export default FeaturedCollectionsSkeleton;
