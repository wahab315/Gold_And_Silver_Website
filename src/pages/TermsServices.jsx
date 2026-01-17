import React from "react";
import { Link } from "react-router-dom";
import SectionTitleServices from "../components/common/SectionTitleServices";
import { termsServicesData } from "../data/TermsServices";

const TermsServices = () => {
  const acceptanceOfTerms = termsServicesData.acceptanceOfTerms;
  const ourServices = termsServicesData.ourServices;
  const accountRegistration = termsServicesData.accountRegistration;
  const kycVerification = termsServicesData.kycVerification;
  const sellingItems = termsServicesData.sellingItems;
  const buyingItems = termsServicesData.buyingItems;
  const pawnServices = termsServicesData.pawnServices;
  const payments = termsServicesData.payments;
  const prohibitedActivities = termsServicesData.prohibitedActivities;
  const limitationOfLiability = termsServicesData.limitationOfLiability;
  const termination = termsServicesData.termination;
  const changesToTerms = termsServicesData.changesToTerms;
  const contactUs = termsServicesData.contactUs;

  return (
    <>
      <SectionTitleServices
        mainTitle="Terms of"
        highlightTitle="Service"
        description="Please read these terms carefully before using our services"
        latestDate="Last updated: Dec 31, 2025"
      />

      <div className="bg-black">
        <div className="container pt-16">
          {/* Acceptance of Terms */}
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {acceptanceOfTerms.title}
            </h1>
            {acceptanceOfTerms.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base lg:text-xl text-[#DBDBDB] pb-2"
              >
                {paragraph}
              </p>
            ))}

            <div className="w-full h-full lg:w-201.25 lg:h-25.75 p-6 rounded-xl bg-[#1B170C] mt-4">
              <p className="text-white text-base">
                {acceptanceOfTerms.important.title}:{" "}
                {acceptanceOfTerms.important.message}
              </p>
            </div>
          </div>
          {/* Our Services */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {ourServices.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {ourServices.intro}
            </p>
            <ul
              className="flex flex-col gap-4 list-disc pl-6 marker:text-[#DBDBDB]"
              style={{ listStyleType: "disc" }}
            >
              {ourServices.services.map((service, index) => (
                <li
                  key={index}
                  className="text-base lg:text-xl text-[#DBDBDB]"
                  style={{ listStyle: "disc" }}
                >
                  <span>{service.title}: </span>
                  <span>{service.description}</span>
                </li>
              ))}
            </ul>
            <p className="text-base lg:text-xl text-[#DBDBDB] pt-8">
              {ourServices.conclusion}
            </p>
          </div>
          {/* Account Registration */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {accountRegistration.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {accountRegistration.intro}
            </p>
            <ul
              className="flex flex-col gap-4 list-disc pl-6 marker:text-[#DBDBDB]"
              style={{ listStyleType: "disc" }}
            >
              {accountRegistration.requirements.map((requirement, index) => (
                <li
                  key={index}
                  className="text-base lg:text-xl text-[#DBDBDB]"
                  style={{ listStyle: "disc" }}
                >
                  {requirement}
                </li>
              ))}
            </ul>
            <p className="text-base lg:text-xl text-[#DBDBDB] pt-8">
              {accountRegistration.conclusion}
            </p>
          </div>
          {/* KYC Verification */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {kycVerification.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {kycVerification.intro}
            </p>
            <ul
              className="flex flex-col gap-4 list-disc pl-6 marker:text-[#DBDBDB]"
              style={{ listStyleType: "disc" }}
            >
              {kycVerification.requirements.map((requirement, index) => (
                <li
                  key={index}
                  className="text-base lg:text-xl text-[#DBDBDB]"
                  style={{ listStyle: "disc" }}
                >
                  {requirement}
                </li>
              ))}
            </ul>
            <p className="text-base lg:text-xl text-[#DBDBDB] pt-8">
              {kycVerification.purpose}
            </p>
            <div className="flex flex-col gap-3 mt-8">
              <h3 className="text-xl text-gradient-gold font-semibold font-playfair-display">
                {kycVerification.verificationTimeline.title}
              </h3>
              <p className="text-base lg:text-xl text-[#DBDBDB]">
                {kycVerification.verificationTimeline.description}
              </p>
            </div>
          </div>
          {/* Selling Items */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {sellingItems.title}
            </h1>
            <h3 className="text-xl text-gradient-gold font-semibold font-playfair-display mb-4">
              {sellingItems.submissionProcess.title}
            </h3>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {sellingItems.submissionProcess.description}
            </p>
            <ul
              className="flex flex-col gap-4 list-disc pl-6 marker:text-[#DBDBDB]"
              style={{ listStyleType: "disc" }}
            >
              {sellingItems.submissionProcess.warranties.map(
                (warranty, index) => (
                  <li
                    key={index}
                    className="text-base lg:text-xl text-[#DBDBDB]"
                    style={{ listStyle: "disc" }}
                  >
                    {warranty}
                  </li>
                )
              )}
            </ul>
            <h3 className="text-xl text-gradient-gold font-semibold font-playfair-display mt-8 mb-4">
              {sellingItems.offersAndAcceptance.title}
            </h3>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {sellingItems.offersAndAcceptance.description}
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl text-gradient-gold font-semibold font-playfair-display">
                {sellingItems.itemVerification.title}
              </h3>
              <p className="text-base lg:text-xl text-[#DBDBDB]">
                {sellingItems.itemVerification.description}
              </p>
            </div>
          </div>
          {/* 6. Buying Items */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {buyingItems.title}
            </h1>
            <h3 className="text-xl text-gradient-gold font-semibold font-playfair-display mb-4">
              {buyingItems.productInformation.title}
            </h3>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {buyingItems.productInformation.description}
            </p>

            <h3 className="text-xl text-gradient-gold font-semibold font-playfair-display mb-4">
              {buyingItems.pricing.title}
            </h3>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {buyingItems.pricing.description}
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl text-gradient-gold font-semibold font-playfair-display">
                {buyingItems.authenticationGuarantee.title}
              </h3>
              <p className="text-base lg:text-xl text-[#DBDBDB]">
                {buyingItems.authenticationGuarantee.description}
              </p>
            </div>
          </div>
          {/* Pawn Services */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {pawnServices.title}
            </h1>
            <h3 className="text-xl text-gradient-gold font-semibold font-playfair-display mb-4">
              {pawnServices.loanTerms.title}
            </h3>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {pawnServices.loanTerms.description}
            </p>
            <ul
              className="flex flex-col gap-4 list-disc pl-6 marker:text-[#DBDBDB]"
              style={{ listStyleType: "disc" }}
            >
              {pawnServices.loanTerms.agreements.map((agreement, index) => (
                <li
                  key={index}
                  className="text-base lg:text-xl text-[#DBDBDB]"
                  style={{ listStyle: "disc" }}
                >
                  {agreement}
                </li>
              ))}
            </ul>
            <h3 className="text-xl text-gradient-gold font-semibold font-playfair-display mt-8 mb-4">
              {pawnServices.itemStorage.title}
            </h3>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {pawnServices.itemStorage.description}
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl text-gradient-gold font-semibold font-playfair-display">
                {pawnServices.default.title}
              </h3>

              <div className="w-full h-full lg:w-201.25 lg:h-25.75 p-6 rounded-xl bg-[#241313] mt-4">
                <p className="text-white text-base">
                  {pawnServices.default.warning.title}:{" "}
                  {pawnServices.default.warning.message}
                </p>
              </div>
            </div>
          </div>
          {/* Payments */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {payments.title}
            </h1>
            <h3 className="text-xl text-gradient-gold font-semibold font-playfair-display mb-4">
              {payments.paymentMethods.title}
            </h3>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {payments.paymentMethods.description}
            </p>

            <h3 className="text-xl text-gradient-gold font-semibold font-playfair-display mb-4">
              {payments.sellerPayments.title}
            </h3>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {payments.sellerPayments.description}
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl text-gradient-gold font-semibold font-playfair-display">
                {payments.fees.title}
              </h3>
              <p className="text-base lg:text-xl text-[#DBDBDB]">
                {payments.fees.description}
              </p>
            </div>
          </div>
          {/*  Prohibited Activities */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {prohibitedActivities.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {prohibitedActivities.intro}
            </p>
            <ul
              className="flex flex-col gap-4 list-disc pl-6 marker:text-[#DBDBDB]"
              style={{ listStyleType: "disc" }}
            >
              {prohibitedActivities.activities.map((activity, index) => (
                <li
                  key={index}
                  className="text-base lg:text-xl text-[#DBDBDB]"
                  style={{ listStyle: "disc" }}
                >
                  {activity}
                </li>
              ))}
            </ul>
            <p className="text-base lg:text-xl text-[#DBDBDB] pt-8">
              {prohibitedActivities.conclusion}
            </p>
          </div>
          {/* Limitation of Liability */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {limitationOfLiability.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {limitationOfLiability.intro}
            </p>
            <ul
              className="flex flex-col gap-4 list-disc pl-6 marker:text-[#DBDBDB]"
              style={{ listStyleType: "disc" }}
            >
              {limitationOfLiability.liabilities.map((liability, index) => (
                <li
                  key={index}
                  className="text-base lg:text-xl text-[#DBDBDB]"
                  style={{ listStyle: "disc" }}
                >
                  {liability}
                </li>
              ))}
            </ul>
            <p className="text-base lg:text-xl text-[#DBDBDB] pt-8">
              {limitationOfLiability.conclusion}
            </p>
          </div>
          {/* Termination */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {termination.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {termination.intro}
            </p>
            <ul
              className="flex flex-col gap-4 list-disc pl-6 marker:text-[#DBDBDB]"
              style={{ listStyleType: "disc" }}
            >
              {termination.reasons.map((reason, index) => (
                <li
                  key={index}
                  className="text-base lg:text-xl text-[#DBDBDB]"
                  style={{ listStyle: "disc" }}
                >
                  {reason}
                </li>
              ))}
            </ul>
            <p className="text-base lg:text-xl text-[#DBDBDB] pt-8">
              {termination.conclusion}
            </p>
          </div>
          {/* Changes to Terms */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {changesToTerms.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {changesToTerms.description}
            </p>
            <p className="text-base lg:text-xl text-[#DBDBDB]">
              {changesToTerms.materialChanges}
            </p>
          </div>
          {/* Contact Us */}
          <div className="py-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {contactUs.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {contactUs.intro}
            </p>
            <div className="w-full h-full lg:w-280 lg:h-55.25 p-6 rounded-xl bg-[#111111] mt-4">
              <h1 className="text-white text-base lg:text-2xl font-semibold font-playfair-display mb-2">
                {contactUs.contactInfo.department}
              </h1>
              <p className="text-white text-base lg:text-lg">
                {contactUs.contactInfo.tagline}
              </p>
              <Link
                to={`mailto:${contactUs.contactInfo.email}`}
                className="text-gradient-gold text-base lg:text-lg"
              >
                {contactUs.contactInfo.email}
              </Link>
              <br />
              <Link
                to={`tel:${contactUs.contactInfo.phone}`}
                className="text-gradient-gold text-base lg:text-lg"
              >
                {contactUs.contactInfo.phone}
              </Link>
              <p className="text-gradient-gold text-base lg:text-lg">
                {contactUs.contactInfo.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsServices;
