export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const res = await fetch(`https://graph.facebook.com/v19.0/${id}?fields=id,media_type,permalink,thumbnail_url,media_url,caption,username,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`);
    const result = await res.json();
    return Response.json(result)
}
