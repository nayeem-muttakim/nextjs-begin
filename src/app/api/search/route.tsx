import { UnsplashSearch } from "@/models/unsplash-image";
import { error } from "console";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "No Query Provided" }, { status: 404 });
  }
  const response = await fetch(
    `https://api.unsplash.com/search/photos/?query=${query}&client_id=${process.env.UNSPLASH_KEY}`
  );

  const { results }: UnsplashSearch = await response.json();
  return NextResponse.json(results);
}
