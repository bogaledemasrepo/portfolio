import React, { useState } from "react";
import PInput from "./PInput";
import { useRouter } from "next/navigation";
import FileUpload from "./FileUpload";
function PUForm() {
  const router = useRouter();
  const [btnDisable, setBtnDisable] = useState(false);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnDisable(true);
    try {
      const resp = await fetch(`${window.location.hostname}/api/projects`, {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      const { success }: { success: boolean; data: unknown } =
        await resp.json();
      if (success) {
        router.push("/projects");
      }
    } catch (error) {
      console.log(error);
      setBtnDisable(false);
    }
    setBtnDisable(false);
  };
  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <div className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
        <form onSubmit={submitHandler}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-neutral-500 dark:text-white uppercase">
            Project upload form
          </h5>
          <PInput label="Project title" name="title" />
          <PInput label="Source code link" name="sourceCode" />
          <PInput label="Perview link" name="previewlink" />
          <PInput label="Discription" name="discription" />

          <FileUpload label="Project tubnail" />
          <button
            className="btn  text-sm md:text-lg btn-gradient btn-primary w-full"
            type="submit"
            disabled={btnDisable}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PUForm;
