import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PeopleIcon from "@mui/icons-material/People";
import EmailIcon from '@mui/icons-material/Email';
import LayersIcon from "@mui/icons-material/Layers";
import Link from "next/link";

export const mainListItems = (handleListItemClick: any) => (
    <React.Fragment>
        <Link href={"/admin/dashboard"} onClick={handleListItemClick}>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
        </Link>
        <Link href={"/admin/information/list"} onClick={handleListItemClick}>
            <ListItemButton>
                <ListItemIcon>
                    <LightbulbIcon />
                </ListItemIcon>
                <ListItemText primary="お知らせ" />
            </ListItemButton>
        </Link>
        <Link href={"/admin/staff/list"} onClick={handleListItemClick}>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="スタッフ" />
            </ListItemButton>
        </Link>
        <ListItemButton>
            <ListItemIcon>
                <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="お問い合わせ" />
        </ListItemButton>
        {/* <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="SNS投稿" />
        </ListItemButton> */}
    </React.Fragment>
);
