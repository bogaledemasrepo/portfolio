export const runtime = "edge";
import { NextRequest, NextResponse } from "next/server";
export async function POST(reqesit: NextRequest) {
  const { passkey } = await reqesit.json();
  console.log(passkey);
  return passkey === process.env.BOGIPASSKEY
    ? NextResponse.json({ success: true, data: true })
    : NextResponse.json({ success: false, data: false });
}
