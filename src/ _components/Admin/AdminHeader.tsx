"use client";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Typography from "@mui/material/Typography";
import { IconButton, Toolbar } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

interface AdminHeaderProps {
    toggleDrawer: any;
    open: any;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => {
    const drawerWidth = theme.custom.drawerWidth;
    return {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: theme.palette.secondary.main, // Set background color to secondary color
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    };
});

const AdminHeader = ({ toggleDrawer, open }: AdminHeaderProps) => {
    const pathname = usePathname();
    const [pathCategory, setPathCategory] = useState<String>();
    const [pathType, setPathType] = useState<String>();

    useEffect(() => {
        const pathArray: Array<string> = pathname.split("/");
        switch (pathArray[2]) {
            case "dashboard":
                setPathCategory("Dashboard");
                break;

            case "information":
                setPathCategory("お知らせ");
                break;

            case "staff":
                setPathCategory("スタッフ");
                break;

            case "contact":
                setPathCategory("お問い合わせ");
                break;

            case "staff":
                setPathCategory("スタッフ");
                break;

            case "contact":
                setPathCategory("お問い合わせ");
                break;

            default:
                break;
        }

        switch (true) {
            case !isNaN(Number(pathArray[3])):
                setPathType("更新");
                break;

            case pathArray[3] === "list":
                setPathType("一覧");
                break;

            case pathArray[3] === "register":
                setPathType("登録");
                break;

            case pathArray[3] === "edit":
                setPathType("更新");
                break;

            case pathArray[3] === "detail":
                setPathType("詳細");
                break;

            case  pathArray[3] === undefined:
                setPathType("");
                break;

            default:
                break;
        }
    }, [pathname]);

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar
                sx={{
                    pr: "24px", // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: "36px",
                        ...(open && { display: "none" }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    {pathCategory && pathCategory}
                    {pathType && pathType}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AdminHeader;
