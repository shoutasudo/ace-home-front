import React from "react";
import Box from "@mui/material/Box";
import AdminMenu from "@/ _components/Admin/AdminMenu";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    // const [user, setUser] = useState(null);
    // const router = useRouter();

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const { data } = await http.get('/api/user');
    //             console.log(data)
    //             setUser(data);
    //         } catch (error) {
    //             console.error('Failed to fetch user:', error);
    //             router.push('/admin/login');
    //         }
    //     };

    //     fetchUser();
    // }, []);

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
