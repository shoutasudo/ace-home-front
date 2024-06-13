import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Axios from 'axios';
import { getServerSession } from 'next-auth';

//認証が必要なエンドポイントへのリクエスト用のインスタンス
//const http = await createHttp();で生成
const createHttp = async () => {
  const session = await getServerSession(authOptions);

  return Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: session?.user?.access_token ? `Bearer ${session.user.access_token}` : '',
    },
    withCredentials: true,
    withXSRFToken: true,
  });
};

export default createHttp;
