import { NextResponse, NextRequest } from "next/server";
import http from "../../../../lib/axios";

export async function POST(req: NextRequest) {
    try {
        // Read the request body as a ReadableStream
        const body = await req.json();
        console.log(body)

        const res = await http.post(
            "http://localhost:8080/api/admin/information/filesExcept",
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