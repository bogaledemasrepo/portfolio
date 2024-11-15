import React from "react";
import CopyEmailButton from "./CopyEmailBtn";
const Contact = () => {
  return (
    <section className="lg:px-40 md:px-10 sm:px-5 my-10 pt-10">
      <div className="w-full flex items-center justify-center my-8">
        <p className="bg-gradient-to-r from-primary to-error bg-clip-text text-transparent font-black text-2xl w-fit">
          Do you want to start project togather?
        </p>
      </div>
      <div className="flex flex-row flex-wrap py-5 items-center justify-center gap-4">
        <div className="sm:max-w-[32rem]">
          <div className="card-body">
            <h5 className="card-title mb-2.5 text-base-content/50 text-center">
            Reach out to me today
            </h5>
            <p className="text-lg text-[#342c3d76]">
              And ready to take you digital presence to next level using latest js
              technology and us we can build an amaizing web and mobile
              application to achive your goals.
            </p>
          </div>
          <div className="card-footer text-base-content/50 mt-4">
            <p className="py-4 font-semibold">
              let us discuss how can I help you?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        <div className="card sm:max-w-[32rem]">
          <div className="card-body">
            <form action="" className="flex flex-col gap-4">
              <div className="form-control w-96">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-filled peer"
                />
                <label className="input-filled-label text-[#342c3d76]">
                  Full Name
                </label>
                <span className="input-filled-focused"></span>
              </div>
              <div className="form-control w-96">
                <input
                  type="text"
                  placeholder="jhon@gmail.com"
                  className="input input-filled peer"
                />
                <label className="input-filled-label text-[#342c3d76]">
                  Email
                </label>
                <span className="input-filled-focused"></span>
              </div>
              <div className="form-control sm:w-96">
                <textarea
                  className="textarea textarea-floating peer"
                  placeholder="Hello!!!"
                ></textarea>
                <span className="textarea-floating-label text-[#342c3d76]">
                  Message
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  className="btn btn-outline btn-warning flex-1"
                  type="reset"
                >
                  Clear
                </button>
                <button
                  className="btn btn-gradient btn-primary flex-1"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
