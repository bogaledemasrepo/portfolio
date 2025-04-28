export const runtime = "edge";
import { NextRequest, NextResponse } from "next/server";

import {
  addProject,
  deleteTubnail,
  getProjects,
  uploadTubnail,
} from "@/appwrite.config";

export async function POST(reqesit: NextRequest) {
  try {
    const formData = await reqesit.formData();
    const body = Object.fromEntries(formData);
    const { title, discription, sourceCode, previewlink } = body;

    const file = (formData.get("tubnail") as File) || null;
    if (!file) throw new Error("tubnail not found");
    const fileId = `tubnail-${Date.now()}`;
    const tubnail_url = await uploadTubnail(fileId, file);
    const responce = await addProject({
      title: title as string,
      description: discription as string,
      sourceCodeLink: sourceCode as string,
      previewLink: previewlink as string,
      thumbnail: tubnail_url,
    });
    if (responce.error) await deleteTubnail(fileId);
    return NextResponse.json(responce);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      data: null,
      error: "Unkoun server error!",
    });
  }
}

export async function GET() {
  return NextResponse.json(await getProjects());
}
