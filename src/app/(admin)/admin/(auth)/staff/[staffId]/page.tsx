import UpdateForm from "@/ _components/Admin/Staff/UpdateForm";
import createAxiosInstance from "@/lib/axiosWithToken"

interface Props {
    params: { staffId: string }
};

export type Staff = {
    id: string
    name:  string
    comment: string
    role: string
    image: string
    created_at: string
    updated_at: string
};

//データフェッチ
const fetchStaff = async (id: string): Promise<Staff> => {
    try {
        const axios = await createAxiosInstance();
        const res = await axios.get(`/api/admin/staff/show/${id}`);
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

const StaffDetail = async ({ params }: Props) => {
    const staffId = params.staffId;
    /**
     * APIから取得した値をJSX内で展開しつつ、エラーハンドリングも行いたい場合どうするか考える
     * Partialを使うor空文字で初期化は、すべて必須のプロパティである今回の場合においてかなり型安全性を損なうので気が引ける
     */
    try {
        var staff: Staff = await fetchStaff(staffId);
        console.log(staff);
    } catch (error) {
        console.error(error);
    }

    return (
        <section className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
            <section className="pb-4 border-b border-gray-300 space-y-5">
                <h1 className="text-2xl font-bold">スタッフ編集</h1>
            </section>
            <UpdateForm staff={staff}/>
        </section>
    );
}
export default StaffDetail;
