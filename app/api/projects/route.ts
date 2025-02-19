import CatchMe from "@/lib/CatchMe";
import { uploadFile } from "@/lib/FileUpload";
import Projects from "@/models/Projects";
import { NextRequest } from "next/server";

export async function POST(reqesit: NextRequest) {
  return CatchMe(async () => {
    const formData = await reqesit.formData();
    const body = Object.fromEntries(formData);
    const file = (body.tubnail as File) || null;
    if (!file) throw new Error("tubnail not found");
    const { success, path } = await uploadFile(file);
    if (!success) throw new Error("Image upload fild");

    const newProject = new Projects({
      title: body.title,
      discription: body.discription,
      tubnail: path,
      sourceCode: body.sourceCode,
      previewlink: body.previewlink,
    });
    try {
      console.log(newProject);
      const resualt = await newProject.save();
      return resualt;
    } catch (error) {
      console.log(error);
      return [];
    }
  });
}
export async function GET() {
  return CatchMe(async () => {
    const resualt = await Projects.find();
    console.log(resualt);
    return resualt;
  });
}
