import React from "react";
import FormInput from "./FormInput";

const Contactspage = () => {
  return (
    <section id="contact" className="lg:px-40 md:px-10 sm:px-5 my-10">
      <main>
        <div className="w-full flex items-center justify-center">
          <h1 className="border-2 border-slate-200 bg-red-100 rounded-lg shadow-md text-2xl text-center text-slate-400 font-bold inline-block p-5">
            Do you want to start project togather?
          </h1>
        </div>
        <div className="flex flex-row flex-wrap py-5 items-center justify-center gap-2">
          <div className="w-[470px] p-10">
            <p className="p-4 text-sm text-slate-400 text-justify">
              Ready to take you digital presence to next level using latest js
              technology and us we can build an amaizing web and mobile
              application to achive your goals.
            </p>
            <p className="p-4 text-md text-slate-400 text-justify">
              Reach out to me today and let us discuss how can I help you?
            </p>
            <button className="py-2 px-4 h-10 bg-red-300 text-sm md:text-lg border-none rounded-lg text-neutral-50 my-4 mx-2">
              Let&apos;s get in teach
            </button>
          </div>
          <div className="w-[470px] p-10">
            <form action="" className="flex flex-col">
              <FormInput label="Full name" type="text" />
              <FormInput label="Email address" type="text" />
              <div className="flex flex-col p-2 gap-2">
                <label className="text-md text-slate-400">Message</label>
                <textarea
                  className="px-4 py-1 outline-none bg-sky-50 border-b-2 border-gray-300 text-slate-400 text-sm"
                  rows={5}
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contactspage;
