import { NextResponse } from "next/server";

export const GET = async () => {
    const res = await fetch(`https://graph.facebook.com/v19.0/${process.env.NEXT_PUBLIC_INSTAGRAM_ID}/?fields=name,media_count,username,id,profile_picture_url&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`);

    const userData = await res.json();
    console.log(userData);
    return NextResponse.json(userData)
}