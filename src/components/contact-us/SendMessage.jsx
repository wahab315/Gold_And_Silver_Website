import React from "react";
import { useForm } from "react-hook-form";
import { assets } from "../../constants/assets";
import { contactUsData } from "../../data/contact-us";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const SendMessage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <>
      <div className="py-8.75 lg:py-17.5 bg-black">
        <div className="container px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-12 gap-6 lg:gap-14">
            {/* Message Form */}
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-5 sm:gap-7">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#DBDBDB]! font-semibold font-playfair-display">
                Send Us a <span className="text-gradient-gold">Message</span>
              </h1>
              {/* contact form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-12 gap-4 sm:gap-5">
                  {/* Name */}
                  <div className="col-span-12">
                    <input
                      type="text"
                      className={`w-full h-14 sm:h-16.25 bg-[#131210] rounded-xl outline-none border px-4 sm:px-6 placeholder-text text-sm sm:text-base ${
                        errors.your_name
                          ? "border-red-500"
                          : "border-[#595959D1]"
                      }`}
                      {...register("your_name", {
                        required: "Your Name is required",
                        minLength: {
                          value: 3,
                          message: "Your Name must be at least 3 characters",
                        },
                      })}
                      placeholder="Your Name"
                    />
                    {errors.your_name && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {errors.your_name.message}
                      </p>
                    )}
                  </div>
                  {/* Email */}
                  <div className="col-span-12">
                    <input
                      type="text"
                      className={`w-full h-14 sm:h-16.25 bg-[#131210] rounded-xl outline-none border px-4 sm:px-6 placeholder-text text-sm sm:text-base ${
                        errors.email ? "border-red-500" : "border-[#595959D1]"
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address including @",
                        },
                      })}
                      placeholder="Email Address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  {/* Sell */}
                  <div className="col-span-12 relative">
                    <input
                      type="text"
                      className={`w-full h-14 sm:h-16.25 bg-[#131210] rounded-xl outline-none border pl-4 sm:pl-6 pr-12 sm:pr-14 placeholder-text-white text-sm sm:text-base ${
                        errors.sell ? "border-red-500" : "border-[#595959D1]"
                      }`}
                      {...register("sell", {
                        required: "Please enter what you want to sell",
                      })}
                      placeholder="I want to sell"
                    />
                    <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <img
                        src={assets.arrow_down}
                        alt="arrow-down"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>
                    {errors.sell && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {errors.sell.message}
                      </p>
                    )}
                  </div>
                  {/* Message textarea */}
                  <div className="col-span-12">
                    <textarea
                      className={`w-full h-32 sm:h-37.75 pt-4 sm:pt-5 bg-[#131210] rounded-xl outline-none border px-4 sm:px-6 placeholder-text resize-none text-sm sm:text-base ${
                        errors.description
                          ? "border-red-500"
                          : "border-[#595959D1]"
                      }`}
                      {...register("description", {
                        required: "Description is required",
                        minLength: {
                          value: 5,
                          message: "Description must be at least 5 characters",
                        },
                      })}
                      placeholder="Message"
                    ></textarea>
                    {errors.description && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {errors.description.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* submit button */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-[linear-gradient(256.9deg,#B18325_6.41%,#D7BF75_98.66%)]! rounded-[50px] text-base sm:text-lg lg:text-xl w-full h-12 sm:h-14.5 text-black font-semibold! mt-4 sm:mt-0"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Faq Section */}
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-5 sm:gap-7 mt-8 lg:mt-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#DBDBDB]! font-semibold font-playfair-display">
                FAQ
              </h1>
              <AccordionPrimitive.Root
                type="single"
                collapsible
                className="w-full flex flex-col gap-0"
              >
                {contactUsData.faq.questions.map((item, index) => (
                  <AccordionPrimitive.Item
                    key={item.id}
                    value={item.id}
                    className={`border-b border-[#595959D1] ${
                      index === contactUsData.faq.questions.length - 1
                        ? "border-b-0"
                        : ""
                    }`}
                  >
                    <AccordionPrimitive.Header className="flex">
                      <AccordionPrimitive.Trigger className="group flex flex-1 items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4 text-left text-white font-normal transition-all outline-none hover:no-underline [&[data-state=open]>div>img]:rotate-180">
                        <span className="text-sm sm:text-base md:text-lg pr-2">
                          {item.question}
                        </span>
                        <div className="shrink-0 transition-transform duration-300">
                          <img
                            src={assets.arrow_down}
                            alt="arrow-down"
                            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300"
                          />
                        </div>
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionPrimitive.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="pb-3 sm:pb-4 pt-0">
                        <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </AccordionPrimitive.Content>
                  </AccordionPrimitive.Item>
                ))}
              </AccordionPrimitive.Root>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMessage;
