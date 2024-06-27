'use client'

import { Button } from "@mui/material"
import { useRouter } from "next/navigation";

export const RegisterButton = () => {
    const router = useRouter();
    return (
        <div className="w-full flex justify-end mb-5" >
            <Button variant="outlined" onClick={() => router.push('/admin/information/register')}>新規登録</Button>
        </div>
    )
}
