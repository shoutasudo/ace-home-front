import http from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, { params }: { params: {id: string } }) {
    try {
        const { id } = params;
        console.log("/api/admin/contact/detail/" + id);
        
        const res = await http.get(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/admin/contact/detail/" + id );

        // console.log('レスポンスデータ:', res);
        return NextResponse.json(res.data);
    } catch (error) {
        // console.error("Error:", error);

        return NextResponse.json(
            { message: "Internal Server Error", error: error },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const { id } = await request.json();
        const res = await http.post(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/admin/contact/unread", { id });
        return NextResponse.json(res.data);
    } catch (error) {
        // console.error('Error:', error);
        return NextResponse.json(
            { message: "Internal Server Error", error},
            { status: 500}
        );
    }
}