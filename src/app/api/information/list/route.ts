import { NextResponse, NextRequest } from "next/server";
import http from "../../../../lib/axios";

export async function GET() {
    try {
        const res = await http.get(
            "http://localhost:8080/api/admin/information/list"
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
