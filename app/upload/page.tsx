"use client";
import CustomInput from "@/components/CustomInput";
import FileUpload from "@/components/FileUpload";
import TextArea from "@/components/TextArea";
import React, { useState } from "react";
import { uploadProjectAction } from "../api/actions";

export default function page() {
  const [formData, setFormData] = useState({
    title: "",
    githublink: "",
    previewlink: "",
    discription: "",
    tubnial: "",
  });
  const [titleValid, setTitleValid] = useState("");
  const [githublinkValid, setGithublinkValid] = useState("");
  const [previewlinkValid, setPreviewlinkValid] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFormData = (index: string, value: unknown) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [index]: value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent page reload
    event.preventDefault();
    setTitleValid(() => {
      const val = formData.title.trim().length;
      if (val > 3) return "";
      else return "Title must be longer!";
    });
    setPreviewlinkValid(() => {
      const val = formData.previewlink.trim().length;
      if (val > 10) return "";
      else return "Preview url must be longer!";
    });
    setGithublinkValid(() => {
      const val = formData.githublink.trim().length;
      if (val > 10) return "";
      else return "Github url must be longer!";
    });
    setLoading(true);
    const resp = await uploadProjectAction(formData);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    resp ? setLoading(false) : null;
  };
  return (
    <div className="w-full min-h-[90vh] pt-16 flex justify-center">
      <div className="max-w-sm bg-neutral-200">
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <h5 className="card-title py-4 text-[#342c3d76]">
              PROJECT UPLOAD FORM
            </h5>
            <CustomInput
              errmsg={titleValid}
              type="text"
              label="Project title"
              value={formData.title}
              setInputChange={(event) =>
                handleFormData("title", event.target.value)
              }
            />
            <CustomInput
              errmsg={previewlinkValid}
              type="text"
              label="Preview address"
              value={formData.previewlink}
              setInputChange={(event) =>
                handleFormData("previewlink", event.target.value)
              }
            />
            <CustomInput
              errmsg={githublinkValid}
              type="text"
              label="Github address"
              value={formData.githublink}
              setInputChange={(event) =>
                handleFormData("githublink", event.target.value)
              }
            />

            <TextArea
              label="Project discription"
              value={formData.discription}
              setInputChange={(event) =>
                handleFormData("discription", event.target.value)
              }
            />
            <FileUpload
              label="Project tubnail"
              value={formData.tubnial}
              setInputChange={(event) =>
                handleFormData("tubnial", event.target.value)
              }
            />
            <div className="card-actions py-4 flex gap-4">
              <button
                className="btn text-lg btn-gradient btn-primary flex-1"
                type="submit"
              >
                {loading ? "Loading" : "Upload"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
