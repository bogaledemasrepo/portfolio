import { writeFileSync } from "fs";
import path from "path";

export async function uploadFile(file: File, title: string) {
  try {
    const filePath = path.join(
      "/images/tubnails",
      title.split(" ").join("-").toLowerCase() + ".png"
    );
    const buffer = Buffer.from(await file.arrayBuffer());
    writeFileSync("public" + filePath, buffer);
    return {
      success: true,
      path: filePath,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      path: "",
    };
  }
}
