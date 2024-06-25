import { authOptions } from '@/lib/auth';
import Axios, { AxiosError, AxiosResponse } from 'axios';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

// Route Handler | RSCからのリクエスト用
// const axios = await createAxiosInstance();で生成
// axios.post('/api/{endpoint}')でリクエスト送信
const createAxiosInstance = async () => {
  const instance = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Application': 'application/json',
    },
    withCredentials: true,
    withXSRFToken: true,
  });

  //このインスタンスを使ったすべてのリクエストの前に割り込みsession情報があればheaderにトークンを設置
  instance.interceptors.request.use(async (request) => {
    const session = await getServerSession(authOptions);

    if(session) request.headers['Authorization'] = `Bearer ${session.user?.access_token}`

    return request;
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        // if (error.response && error.response.status === 401) {
        //     console.log('oudiegawfygawef');
        //     //↓が動かない
        //     redirect('/admin/login');
        // }
        return Promise.reject(error);
    },
);
  //その他エラーハンドリングは各自お願いします
  return instance;
};

export default createAxiosInstance;
