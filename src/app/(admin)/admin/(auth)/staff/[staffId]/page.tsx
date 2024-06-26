import UpdateForm from "@/ _components/Admin/Staff/templates/UpdateForm";
import { fetchStaffById } from "../_services/api/fetchStaffById";
import { Staff } from "@/types/staff";
import PageTitle from "@/ _components/Admin/Staff/atoms/PageTitle";

interface Props {
    params: { staffId: string }
};

const StaffDetail = async ({ params }: Props) => {
    const staffId = params.staffId;

    let staff: Staff = await fetchStaffById(staffId);

    return (
        <section className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
            <UpdateForm staff={staff}/>
        </section>
    );
}
export default StaffDetail;
