"use client";
import React from "react";

function ContactForm() {
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    console.log(new FormData(e.target));
  };
  return (
    <form action="" className="flex-1" onSubmit={submitHandler}>
      <h1 className="text-slate-500 font-bold text-center text-3xl underline">
        Contact me!
      </h1>
      <div className="flex flex-col gap-2 p-2">
        <p className="text-md text-slate-500 text-lg">Name</p>
        <input
          type="text"
          required
          name="name"
          className="ring bg-slate-200 p-2 rounded-sm ring-blue-300/80"
        />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <p className="text-md text-slate-500 text-lg">Email</p>
        <input
          type="email"
          name="email"
          required
          className="ring bg-slate-200 p-2 rounded-sm ring-blue-300/80"
        />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <p className="text-md text-slate-500 text-lg">Message</p>
        <textarea
          required
          name="message"
          className="ring bg-slate-200 h-24 p-2 rounded-sm ring-blue-300/80"
        ></textarea>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <button
          className="ring ring-blue-300/80 bg-slate-300 hover:bg-blue-300/80 transition-all duration-300 rounded-sm p-2"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
