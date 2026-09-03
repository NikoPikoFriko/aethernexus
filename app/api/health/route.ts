import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "aethernexus",
    timestamp: new Date().toISOString(),
  });
}
