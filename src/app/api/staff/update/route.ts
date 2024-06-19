import createAxiosInstance from "@/lib/axiosWithToken";
import axios from "axios";
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        console.log('Route Handler ' + JSON.stringify(formData));

        const axios = await createAxiosInstance();
        const res = await axios.post(`/api/admin/staff/update/${formData.get('id')}`, formData);

        return new Response(JSON.stringify(res.data), {
            status: res.status,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error('エラー:', error);

        let errorMessage = '通信中にエラーが発生しました';
        let statusCode = 500;

        if (axios.isAxiosError(error)) {
            //AxiosErrorハンドリング
            if (error.response) {
                // サーバーからのエラーレスポンスが返された場合
                errorMessage = error.response.data || error.message;
                statusCode = error.response.status;
            } else if (error.request) {
                // リクエストが送信されたがレスポンスが返ってこなかった場合
                errorMessage = 'サーバーは現在利用不可能です';
                statusCode = 503;
            } else {
                // リクエストを設定する際にエラーが発生した場合
                errorMessage = error.message;
            }
        }
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: statusCode,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
  }

