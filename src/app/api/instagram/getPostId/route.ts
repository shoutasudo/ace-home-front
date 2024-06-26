import { NextResponse } from "next/server";

export const GET = async () => {
    const res = await fetch(`https://graph.facebook.com/v19.0/${process.env.NEXT_PUBLIC_INSTAGRAM_ID}/media?fields=id&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`);
    const postIdData = await res.json();
    const data = postIdData.data;
    return Response.json(data)
}