import { NextResponse } from "next/server";
import http from "../../../../lib/axios";
import type { NextRequest } from 'next/server.js';

export async function DELETE(req: NextRequest) {
    try {
        const body = req.json();
        console.log(body)

        // const res = await http.get(
        //     "http://localhost:8080/api/admin/information/delete/" + body
        // );

        // console.log('レスポンスデータ:', res);
        // return new Response(JSON.stringify(res.data), {
        //     status: res.status,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });
    } catch (error) {
        console.error("Error:", error);

        return NextResponse.json(
            { message: "Internal Server Error", error: error },
            { status: 500 }
        );
    }
}
