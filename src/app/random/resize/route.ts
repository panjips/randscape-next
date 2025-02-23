import { NextRequest, NextResponse } from "next/server";
import { URL_IMAGE } from "@/utils/constants";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q: string | null = searchParams.get("q");
  const h: string | null = searchParams.get("h");
  const w: string | null = searchParams.get("w");
  const cache: string | null = searchParams.get("cache");
  const cacheBool: boolean = cache === "true";
  if (!q) {
    return NextResponse.json(
      { message: "Invalid query" },
      {
        status: 400,
      }
    );
  }

  const response = await fetch(
    `${URL_IMAGE}/random/resize?q=${q}&h=${h}&w=${w}&cache=${cacheBool}`
  );

  const imageBuffer = await response.arrayBuffer();
  return new NextResponse(imageBuffer, {
    headers: {
      "Content-Type": "image/jpeg",
    },
  });
}
