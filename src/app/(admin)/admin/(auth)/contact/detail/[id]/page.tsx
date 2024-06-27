'use client';
import { Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getContactTypeText, getStatusTypeText } from "../../_utils/typeToText";

const ContactDetail = () => {
    const { id } = useParams();
    const [contact, setContact] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };
    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
    
    useEffect(() => {
        const fetchContact = async () => {
            try {
                const res = await fetch (process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/admin/contact/detail/" + id);
                const resBody = await res.json();
                setContact(resBody);
                setLoading(false);
            } catch (error) {
                console.error('データ取得に失敗しました', error);
                setLoading(false);
            }
        };
        fetchContact();
    }, [id]);
    
    const unRead = async () => {
        try {
            const res = await fetch (
                process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/admin/contact/detail/" + id,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id }),
                }
            );
            if (res.ok) {
                setContact((prev: any) => ({ ...prev, status: 0}));
                router.push('/admin/contact/list');
            }
        } catch (error) {
            console.error('未読処理に失敗しました', error);
        }
    };
    
    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <CircularProgress />
            </div>
        );
    }
    
    return (
        <div className="w-full">
            <div className="w-[80%] h-fit mx-auto my-10 bg-gray-100 rounded-xl flex flex-col justify-center">
                {/* unread */}
                <div className="mt-5 mx-8 flex justify-between">
                    <Button variant="outlined" color="secondary" onClick={() => router.back()}>
                        戻る
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => unRead()}>
                        未読にする
                    </Button>
                </div>
                {/* main content */}
                <div className="mt-10 mx-10">
                    { contact && (
                        <>
                            {/* <div>{getStatusTypeText(contact.status)}</div> */}
                            <div className="flex justify-between pb-4 border-b border-black items-end">
                                <div className="text-xl font-semibold">
                                    { getContactTypeText(contact.contact_type) }
                                </div>
                                <div className="text-end">
                                    <p>Received at : {formatDate(contact.created_at)}</p>
                                    <p>{formatTime(contact.created_at)}</p>
                                </div>
                            </div>
                            <div className="mt-5 flex">
                                <div className="w-1/2">
                                    <div>
                                        Mail : {contact.email}
                                    </div>
                                    <div>
                                        TEL : {contact.tel_number}
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-end">
                                    <div className="whitespace-nowrap">
                                        From :
                                    </div>
                                    <div className="ml-2">
                                        <p>{contact.name}</p>
                                        <p>{contact.company_name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 mb-10 p-4 bg-white rounded-2xl">
                                <div className="whitespace-pre-line">
                                    {contact.content}
                                </div>
                            </div>
                        </>
                    )}
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactDetail;