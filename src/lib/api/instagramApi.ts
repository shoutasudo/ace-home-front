export const getUserData = async () => {
    const res = await fetch(`https://graph.facebook.com/v19.0/${process.env.NEXT_PUBLIC_INSTAGRAM_ID}/?fields=name,media_count,username,id,profile_picture_url&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`);
    const userData = await res.json();
    return userData
}

export const getPostId = async () => {
    const res = await fetch(`https://graph.facebook.com/v19.0/${process.env.NEXT_PUBLIC_INSTAGRAM_ID}/media?fields=id&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`);
    const postIdsObj = await res.json();
    const postIdArr = postIdsObj.data;
    return postIdArr;
}

export const getPostInfo = async (id: string) => {
    const res = await fetch(`https://graph.facebook.com/v19.0/${id}?fields=id,media_type,permalink,media_url,caption,username,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`);
    const info = await res.json();
    return info;
}