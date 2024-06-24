import createAxiosInstance from "@/lib/axiosWithToken";
import { Staff } from "@/types/staff";

export const fetchStaffById = async (id: string): Promise<Staff> => {
    try {
        const axios = await createAxiosInstance();
        const res = await axios.get(`/api/admin/staff/show/${id}`);
        return res.data.data;
    } catch (error) {
        console.error('Error fetching staff:', error);
        throw new Error('Failed to fetch staff');
    }
};
