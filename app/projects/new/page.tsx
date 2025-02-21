/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import PUForm from "@/components/PUForm";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
  const router = useRouter();
  const [isAmin, setIsAdmin] = useState(false);
  const [passKey, setPassKey] = useState("");
  const handleAdminVerification = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const responce = await fetch("http://localhost:3000/api/admin", {
      method: "POST",
      body: JSON.stringify({ passkey: passKey }),
    });
    const { data } = await responce.json();
    if (data === true) setIsAdmin(data);
    else router.push("/projects");
  };
  const passKeyChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setPassKey(text);
  };

  return (
    (isAmin && <PUForm />) || (
      <div className="absolute flex w-[100vw] h-screen items-center justify-center">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form
            className="space-y-6 flex flex-col items-center"
            onSubmit={handleAdminVerification}
          >
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              This page is for admin only.
            </h5>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Please insert admin pass key?
              </label>
              <input
                type="password"
                name="passkey"
                id="passkey"
                onChange={passKeyChangeHandler}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    )
  );
}
