'use client'

import { Button } from "@mui/material"
import { useRouter } from "next/navigation";
import GenericButton from "../Staff/atoms/GenericButton";

export const RegisterButton = () => {
    const router = useRouter();
    return (
        <div className="w-full flex justify-end mb-5" >
            <GenericButton onClick={() => router.push('/admin/information/register')} color="secondary">
                新規登録
            </GenericButton>
        </div>
    )
}
