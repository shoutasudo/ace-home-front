import createAxiosInstance from "@/lib/axiosWithToken";
import { NextResponse, NextRequest } from "next/server";


export const revalidate = 0;

export async function GET() {
    try {

        const axios = await createAxiosInstance();
        const res = await axios.get(
            process.env.NEXT_PUBLIC_BACKEND_URL+ "/api/admin/information/list"
        );

        console.log('レスポンスデータ:', res);
        return NextResponse.json(res.data, {
            status: res.status,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store',
                'CDN-Cache-Control': 'no-store',
                'Vercel-CDN-Cache-Control': 'no-store'
            },
        });
    } catch (error) {
        console.error("Error:", error);

        return NextResponse.json(
            { message: "Internal Server Error", error: error },
            { status: 500 }
        );
    }
}
