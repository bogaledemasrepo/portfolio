import { NextResponse } from "next/server";
import mongoose from "mongoose";
async function CatchMe(fun: () => unknown) {
  const responce: { success: boolean; data: unknown } = {
    success: true,
    data: [],
  };
  try {
    try {
      await mongoose.connect(process.env.MONGODB_URI!);
      const resault = await fun();
      if (resault) responce.data = resault;
    } catch (error) {
      responce.success = false;
      responce.data = ["Server error", error];
    }
  } finally {
    return NextResponse.json(responce);
  }
}

export default CatchMe;
