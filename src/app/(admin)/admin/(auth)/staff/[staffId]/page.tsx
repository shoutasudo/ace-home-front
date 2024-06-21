import UpdateForm from "@/ _components/Admin/Staff/templates/UpdateForm";
import { fetchStaffById } from "../_services/api/fetchStaffById";
import { Staff } from "@/types/staff";
import PageTitle from "@/ _components/Admin/Staff/atoms/PageTitle";

interface Props {
    params: { staffId: string }
};

const StaffDetail = async ({ params }: Props) => {
    const staffId = params.staffId;
    try {
        var staff: Staff = await fetchStaffById(staffId);
        console.log(staff);
    } catch (error) {
        console.error(error);
    }
    return (
        <section className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
            <PageTitle>
                スタッフ編集
            </PageTitle>
            <UpdateForm staff={staff}/>
        </section>
    );
}
export default StaffDetail;
