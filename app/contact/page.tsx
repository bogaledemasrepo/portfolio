import ContactForm from "@/components/ContactForm";
import React from "react";
const page = () => {
  return (
    <section className="my-10 pt-10 max-w-[1080px] mx-auto">
      <div className="w-full flex items-center justify-center my-8">
        <p className="bg-gradient-to-r from-primary to-error bg-clip-text text-transparent font-black text-2xl w-fit">
          Do you want to start project togather?
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-5 my-8">
        <div className="w-full max-w-[480px] mx-auto">
          <div className="card-header flex items-center justify-center">
            <h5 className="card-title">Reach out to me today</h5>
          </div>
          <p className="text-lg text-[#342c3d76]">
            And ready to take you digital presence to next level using latest js
            technology and us we can build an amaizing web and mobile
            application to achive your goals.
          </p>
          <div className="card-footer flex justify-evenly items-center text-base-content/50 mt-4 border border-spacing-1 border-gray-200 rounded-md">
            <p className="py-4 font-semibold flex-1 text-left">
              let us discuss how can I help you?
            </p>
          </div>
        </div>
        <div className="w-full max-w-[480px] mx-auto h-[400px]">
          <ContactForm />
        </div>
      </div>
      <div className="w-full h-16 bg-transparent"></div>
    </section>
  );
};

export default page;
