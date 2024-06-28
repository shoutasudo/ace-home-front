import createAxiosInstance from "@/lib/axiosWithToken";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest,{ params }: { params: {infoId: string } }) {
    try {
        const infoId = params.infoId

        const axios = await createAxiosInstance();
        const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/admin/information/edit/" + infoId)

        console.log('レスポンスデータ:', res);
        return new Response(JSON.stringify(res.data), {
            status: res.status,
            headers: {
                'Content-Type': 'application/json',
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
