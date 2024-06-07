'use client'
import React from 'react'
import AdminHeader from './AdminHeader';
import { CssBaseline } from '@mui/material';
import AdminDrawer from './AdminDrawer';
import { ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
    // 既存のテーマプロパティを定義する
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
    },
  });
  
  // Theme オブジェクトを拡張してカスタムプロパティを追加する
  declare module '@mui/material/styles' {
    interface Theme {
      custom: {
        drawerWidth: number;
      };
    }
    // カスタムプロパティの初期値を定義する
    interface ThemeOptions {
      custom?: {
        drawerWidth?: number;
      };
    }
  }
  
  // カスタムプロパティを設定する
  theme.custom = {
    drawerWidth: 240,
  };
  


const AdminMenu = () => {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <AdminHeader open={open} toggleDrawer={toggleDrawer} />
        <AdminDrawer open={open} toggleDrawer={toggleDrawer} theme={theme} />
      </ThemeProvider>
    )
}

export default AdminMenu
