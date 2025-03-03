import React from "react";
const page = () => {
  return (
    <section className="my-10 pt-10 p-5">
      <div className="w-full flex items-center justify-center my-8">
        <p className="bg-gradient-to-r from-primary to-error bg-clip-text text-transparent font-black text-2xl w-fit">
          Do you want to start project togather?
        </p>
      </div>
      <div className="flex flex-row  flex-wrap py-5 items-center justify-center gap-4">
        <div className="card shadow-none w-full max-w-[32rem] p-2">
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
            {/* <CopyEmailButton /> */}
          </div>
        </div>
        <div className="card w-full max-w-[32rem] p-2">
          <div className="card-header shadow-sm flex items-center justify-center">
            <h5 className="card-title">Contact me!</h5>
          </div>
          <div className="card-body mt-4">
            <form action="" className="flex flex-col gap-4">
              <div className="form-control w-full">
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
              <div className="form-control w-full">
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
              <div className="form-control sm:w-full">
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

export default page;
