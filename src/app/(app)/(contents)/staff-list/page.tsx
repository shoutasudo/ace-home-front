import Contents from '@/ _components/Contents'
import StaffCard from '@/ _components/StaffCard'
import createAxiosInstance from '@/lib/axiosWithToken'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'スタッフリスト'
}
interface Staff {
    id: number;
    name: string;
    comment: string;
    role: string;
    image?: string | undefined;
    created_at: string;
    updated_at: string;
}
type StaffCollection = Staff[];

//データフェッチ
const fetchStaff = async (): Promise<Staff[]> => {
    try {
        const axios = await createAxiosInstance();
        const res = await axios.get('/api/staff/index');
        return res.data.data;
    } catch (error) {
        console.error('Error fetching staff:', error);
        throw new Error('Failed to fetch staff');
    }
};

// 日時フォーマット
const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('ja-JP', options).format(new Date(dateString));
};

const StaffListPage = async () => {
    let staff: StaffCollection = [];
    try {
        staff = await fetchStaff();
        console.log(staff)
    } catch (error) {
        console.log(error)
    }
    return (
        <Contents subTitle={'STAFF LIST'} mainTitle={'スタッフ紹介'}>
            <div className="staff-list-container w-full max-w-4xl flex justify-center mt-3 md:px-0">
                <div className="w-full grid md:grid-cols-3 md:gap-1 sm:grid-cols-2 sm:gap-2 grid-cols-1 gap-0">
                    {Array.isArray(staff) ? (
                        staff.map((val) => (
                            <div
                                className="staff-list-container-card w-full flex justify-center mt-3 mb-8"
                                key={val.id}
                            >
                                <StaffCard
                                    src={val.image? decodeURIComponent(val.image) : ''}
                                    jobTitle={val.role}
                                    name={val.name}
                                    comment={val.comment}
                                />
                            </div>
                        ))
                    ): (
                        <p></p>
                    )
                    }
                </div>
            </div>
        </Contents>
    )
}

export default StaffListPage
