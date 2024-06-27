import http from "@/lib/axios";
import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server.js';

export async function DELETE(req: NextRequest) {
    try {
        const body = await req.json();

        const res = await http.delete(
            process.env.NEXT_PUBLIC_BACKEND_URL + "/api/admin/contact/delete/" + body.id
        );

        // console.log('response data:', res);
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