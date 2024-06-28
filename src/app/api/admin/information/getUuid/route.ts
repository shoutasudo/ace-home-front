import createAxiosInstance from "@/lib/axiosWithToken";
import { NextResponse, NextRequest } from "next/server";


export async function GET() {
    try {

        const axios = await createAxiosInstance();
        const res = await axios.get(
            process.env.NEXT_PUBLIC_BACKEND_URL + "/api/admin/information/store/uuid"
        );

        console.log('レスポンスデータ:', res);
        return new Response(JSON.stringify(res.data), {
            status: res.status,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
                'Surrogate-Control': 'no-store'
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
