"use server";
export const uploadProjectAction = async (formData: {
  title: string;
  githublink: string;
  previewlink: string;
  discription: string;
  tubnial: string;
}) => {
  console.log("Start !!!!!!!!!!!!!!!!!!!!!!!");
  setTimeout(() => {}, 10000);
  console.log(formData);
  return true;
};
