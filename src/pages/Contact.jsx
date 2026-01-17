import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import GetInTouch from "../components/contact-us/GetInTouch";
import SendMessage from "../components/contact-us/SendMessage";
import Faq from "../components/contact-us/Faq";

const Contact = () => {
  return (
    <>
      <SectionTitle
        mainTitle="Contact"
        highlightTitle="Us"
        description="Have questions? We'd love to hear from you. Get in touch with our team."
      />
      {/* GetInTouch */}
      <GetInTouch />
      {/* Send us Message Form */}
      <SendMessage />
    </>
  );
};

export default Contact;
