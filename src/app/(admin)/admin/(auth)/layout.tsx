import React from "react";
import Box from "@mui/material/Box";
import AdminMenu from "@/ _components/Admin/AdminMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession(authOptions);
    if (!session?.user) redirect('/admin/login');

    return (
        <div className="h-screen">
            <div className="w-full h-[64px]"></div>
            <Box sx={{ display: "flex" }}>
                <AdminMenu />
                {children}
            </Box>
        </div>
    );
};

export default AuthLayout;
