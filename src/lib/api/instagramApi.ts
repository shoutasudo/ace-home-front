export const getUserData = async () => {
    const res = await fetch(`https://graph.facebook.com/v19.0/${process.env.NEXT_PUBLIC_INSTAGRAM_ID}/?fields=name,media_count,username,id,profile_picture_url&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`);
    const userData = await res.json();
    return userData
}

export const getPostId = async () => {
    const res = await fetch(`https://graph.facebook.com/v19.0/${process.env.NEXT_PUBLIC_INSTAGRAM_ID}/media?fields=id&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`, { cache: 'no-store' });
    const postIdsObj = await res.json();
    const postIdArr = postIdsObj.data;
    return postIdArr;
}

export const getPostInfo = async (id: string) => {
    const res = await fetch(`https://graph.facebook.com/v19.0/${id}?fields=id,media_type,permalink,media_url,thumbnail_url,caption,username,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`, { cache: 'no-store' });
    const info = await res.json();
    return info;
}

export const instagramApi = async (url:string, method:string,postData: any) => {
    try {
        const data = postData
        const headers = {
            'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN,
            'Content-Type': 'application/json',
        };

        const options = {
            'method': method,
            'headers': headers,
            'body': JSON.stringify(data)
        };

        const res = await fetch(url, options);
        const responseBody = await res.json();
        return responseBody;
    } catch (error) {
        console.error(error)
    }
}
