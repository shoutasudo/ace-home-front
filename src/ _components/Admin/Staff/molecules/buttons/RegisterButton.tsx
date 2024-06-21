'use client'

import { useRouter } from "next/navigation";
import GenericButton from "../../atoms/GenericButton";


const RegisterButton: React.FC = () => {
    const router = useRouter();
    return (
        <GenericButton onClick={() => router.push('/admin/staff/register')} color="secondary">
            新規登録
        </GenericButton>
    );
}

export default RegisterButton;
