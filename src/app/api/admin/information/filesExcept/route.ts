import http from "@/lib/axios";
import { NextResponse, NextRequest } from "next/server";


export async function POST(req: NextRequest) {
    try {
        // Read the request body as a ReadableStream
        const body = await req.json();

        const res = await http.post(
            process.env.NEXT_PUBLIC_BACKEND_URL + "/api/admin/information/filesExcept",
            body,
        );

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
