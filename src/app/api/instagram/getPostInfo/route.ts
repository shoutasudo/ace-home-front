import { NextResponse } from "next/server";

export const GET = async (id: string) => {
    const res = await fetch(`https://graph.facebook.com/v19.0/${id}?fields=id,media_type,permalink,media_url,caption,username,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`, { cache: 'no-store' });
    
    const info = await res.json();
    return NextResponse.json(info);
}