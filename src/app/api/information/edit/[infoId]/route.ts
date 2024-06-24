import { NextRequest, NextResponse } from "next/server";
import http from "../../../../../lib/axios";

export async function GET(request: NextRequest,{ params }: { params: {infoId: string } }) {
    try {
        console.log(params)
        const infoId = params.infoId

        const res = await http.get(
            "http://localhost:8080/api/admin/information/edit/" + infoId
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
