import { NextResponse } from "next/server";

export const GET = async () => {
    const res = await fetch(`https://graph.facebook.com/v19.0/${process.env.NEXT_PUBLIC_INSTAGRAM_ID}/media?fields=id&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`, { cache: 'no-store' });
    const postIdsObj = await res.json();
    const postIdArr = postIdsObj.data;
    return NextResponse.json(postIdArr);
}