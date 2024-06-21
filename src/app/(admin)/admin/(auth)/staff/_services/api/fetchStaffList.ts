import createAxiosInstance from "@/lib/axiosWithToken";

interface Staff {
    id: string;
    name: string;
    comment: string;
    created_at: string;
}

export type StaffCollection = Staff[];

export const fetchStaffList = async (): Promise<StaffCollection> => {
    try {
        const axios = await createAxiosInstance();
        const res = await axios.get('/api/admin/staff/index');
        return res.data.data;
    } catch (error) {
        console.error('Error fetching staff:', error);
        throw new Error('Failed to fetch staff');
    }
};
