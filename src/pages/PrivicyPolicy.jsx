import React from "react";
import { Link } from "react-router-dom";
import SectionTitleServices from "../components/common/SectionTitleServices";
import { privacyPolicyData } from "../data/PrivacyPolicy";

const PrivicyPolicy = () => {
  const introduction = privacyPolicyData.introduction;
  const informationCollection = privacyPolicyData.informationCollection;
  const howWeUseData = privacyPolicyData.howWeUseData;
  const informationSharing = privacyPolicyData.informationSharing;
  const dataSecurity = privacyPolicyData.dataSecurity;
  const dataRetention = privacyPolicyData.dataRetention;
  const yourRights = privacyPolicyData.yourRights;
  const cookiesTracking = privacyPolicyData.cookiesTracking;
  const childrensPrivacy = privacyPolicyData.childrensPrivacy;
  const internationalTransfers = privacyPolicyData.internationalTransfers;
  const policyChanges = privacyPolicyData.policyChanges;
  const contactUs = privacyPolicyData.contactUs;

  return (
    <>
      <SectionTitleServices
        mainTitle="Privacy"
        highlightTitle="Policy"
        description="Protecting your personal data is our top priority"
        latestDate="Last updated: Oct 1, 2023"
      />

      <div className="bg-black">
        <div className="container pt-16">
          {/* Introduction */}
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {introduction.title}
            </h1>
            {introduction.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base lg:text-xl text-[#DBDBDB] pb-2"
              >
                {paragraph}
              </p>
            ))}

            <div className="w-full h-full lg:w-201.25 lg:h-25.75 p-6 rounded-xl bg-[#1B170C] mt-4">
              <p className="text-white text-base">
                {introduction.important.title}:{" "}
                {introduction.important.message}
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {informationCollection.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {informationCollection.intro}
            </p>
            {informationCollection.categories.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl lg:text-2xl text-white font-semibold mb-3">
                  {category.title}:
                </h3>
                <ul
                  className="flex flex-col gap-2 list-disc pl-6 marker:text-[#DBDBDB]"
                  style={{ listStyleType: "disc" }}
                >
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-base lg:text-xl text-[#DBDBDB]"
                      style={{ listStyle: "disc" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="w-full h-full lg:w-201.25 lg:h-25.75 p-6 rounded-xl bg-[#1B170C] mt-4">
              <p className="text-white text-base">
                <strong>{informationCollection.sensitiveData.title}:</strong>{" "}
                {informationCollection.sensitiveData.message}
              </p>
            </div>
          </div>

          {/* How We Use Your Data */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {howWeUseData.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-4">
              {howWeUseData.intro}
            </p>
            <ul
              className="flex flex-col gap-3 list-disc pl-6 marker:text-[#DBDBDB] mb-6"
              style={{ listStyleType: "disc" }}
            >
              {howWeUseData.purposes.map((purpose, index) => (
                <li
                  key={index}
                  className="text-base lg:text-xl text-[#DBDBDB]"
                  style={{ listStyle: "disc" }}
                >
                  {purpose}
                </li>
              ))}
            </ul>
            <h3 className="text-xl lg:text-2xl text-white font-semibold mb-3">
              {howWeUseData.legalBasis.title}:
            </h3>
            <p className="text-base lg:text-xl text-[#DBDBDB] mb-3">
              {howWeUseData.legalBasis.intro}
            </p>
            <ul
              className="flex flex-col gap-3 list-disc pl-6 marker:text-[#DBDBDB]"
              style={{ listStyleType: "disc" }}
            >
              {howWeUseData.legalBasis.bases.map((basis, index) => (
                <li
                  key={index}
                  className="text-base lg:text-xl text-[#DBDBDB]"
                  style={{ listStyle: "disc" }}
                >
                  {basis}
                </li>
              ))}
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {informationSharing.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {informationSharing.intro}
            </p>
            {informationSharing.categories.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl lg:text-2xl text-white font-semibold mb-3">
                  {category.title}:
                </h3>
                <ul
                  className="flex flex-col gap-2 list-disc pl-6 marker:text-[#DBDBDB]"
                  style={{ listStyleType: "disc" }}
                >
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-base lg:text-xl text-[#DBDBDB]"
                      style={{ listStyle: "disc" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Data Security */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {dataSecurity.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-4">
              {dataSecurity.intro}
            </p>
            {dataSecurity.measures.map((measure, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl lg:text-2xl text-white font-semibold mb-2">
                  {measure.title}:
                </h3>
                <p className="text-base lg:text-xl text-[#DBDBDB]">
                  {measure.description}
                </p>
              </div>
            ))}
            <div className="w-full h-full lg:w-201.25 lg:h-25.75 p-6 rounded-xl bg-[#1B170C] mt-4">
              <p className="text-white text-base">
                <strong>{dataSecurity.important.title}:</strong>{" "}
                {dataSecurity.important.message}
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {dataRetention.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-4">
              {dataRetention.intro}
            </p>
            <ul
              className="flex flex-col gap-3 list-disc pl-6 marker:text-[#DBDBDB] mb-8"
              style={{ listStyleType: "disc" }}
            >
              {dataRetention.reasons.map((reason, index) => (
                <li
                  key={index}
                  className="text-base lg:text-xl text-[#DBDBDB]"
                  style={{ listStyle: "disc" }}
                >
                  {reason}
                </li>
              ))}
            </ul>
            {/* Data Retention Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#39311D]">
                    <th className="text-left text-white text-base lg:text-xl font-semibold py-4 px-4">
                      DATA TYPE
                    </th>
                    <th className="text-left text-white text-base lg:text-xl font-semibold py-4 px-4">
                      RETENTION PERIOD
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataRetention.table.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#39311D]"
                    >
                      <td className="text-base lg:text-xl text-[#DBDBDB] py-4 px-4">
                        {row.dataType}
                      </td>
                      <td className="text-base lg:text-xl text-[#DBDBDB] py-4 px-4">
                        {row.retentionPeriod}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Your Rights */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {yourRights.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-8">
              {yourRights.intro}
            </p>
            {/* Rights Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {yourRights.rights.map((right, index) => (
                <div
                  key={index}
                  className="bg-[#111111] rounded-xl p-6"
                >
                  <h3 className="text-xl text-white font-semibold mb-2">
                    {right.title}
                  </h3>
                  <p className="text-base text-[#DBDBDB]">
                    {right.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-base lg:text-xl text-[#DBDBDB]">
              {yourRights.conclusion}
            </p>
          </div>

          {/* Cookies & Tracking */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {cookiesTracking.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-4">
              {cookiesTracking.intro}
            </p>
            {cookiesTracking.cookieTypes.map((cookieType, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl lg:text-2xl text-white font-semibold mb-2">
                  {cookieType.title}:
                </h3>
                <p className="text-base lg:text-xl text-[#DBDBDB]">
                  {cookieType.description}
                </p>
              </div>
            ))}
            <p className="text-base lg:text-xl text-[#DBDBDB] mt-6">
              {cookiesTracking.managingCookies}
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {childrensPrivacy.title}
            </h1>
            {childrensPrivacy.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base lg:text-xl text-[#DBDBDB] pb-2"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* International Transfers */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {internationalTransfers.title}
            </h1>
            <p className="text-base lg:text-xl text-[#DBDBDB] pb-4">
              {internationalTransfers.intro}
            </p>
            <ul
              className="flex flex-col gap-3 list-disc pl-6 marker:text-[#DBDBDB]"
              style={{ listStyleType: "disc" }}
            >
              {internationalTransfers.safeguards.map((safeguard, index) => (
                <li
                  key={index}
                  className="text-base lg:text-xl text-[#DBDBDB]"
                  style={{ listStyle: "disc" }}
                >
                  {safeguard}
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Changes */}
          <div className="pt-10">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display border-b border-[#39311D] pb-8 mb-8">
              {policyChanges.title}
            </h1>
            {policyChanges.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base lg:text-xl text-[#DBDBDB] pb-2"
              >
                {paragraph}
              </p>
            ))}
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
              <Link
                to={`mailto:${contactUs.contactInfo.email}`}
                className="text-gradient-gold text-base lg:text-lg block mb-2"
              >
                {contactUs.contactInfo.email}
              </Link>
              <Link
                to={`tel:${contactUs.contactInfo.phone}`}
                className="text-gradient-gold text-base lg:text-lg block mb-2"
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

export default PrivicyPolicy;
