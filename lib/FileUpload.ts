import { writeFileSync } from "fs";
import path from "path";

export async function uploadFile(file: File) {
  console.log(file);
  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    writeFileSync(path.join("public/images/tubnails", file.name), buffer);
    return {
      success: true,
      path: path.join("public/images/tubnails", file.name),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      path: "",
    };
  }
}
