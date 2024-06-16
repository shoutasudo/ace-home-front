import { NextRequest, NextResponse } from "next/server"
import http from "@/lib/axios"

export async function POST(req: NextRequest) {
    console.log(req.json)
    const data = await req.json()
    try {
        const res = await http.post('/api/contact', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return NextResponse.json({ message: res.data.message })
    } catch (error: any) {
        if (error.response) {
            const status = error.response.status
            const errorMessage = error.response.data.message
            const errors = error.response.data.errors
            return NextResponse.json({ message: errorMessage, errors }, { status })
        }
        console.error('Error ocurred while sending data:', error)
        return NextResponse.json({ message: 'error ocurred while sending data' }, { status: 500 })
    }
}
