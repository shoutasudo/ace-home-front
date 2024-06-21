'use client'

import React from 'react';
import { Button, CircularProgress, ThemeProvider, createTheme, Box } from '@mui/material';

interface GenericButtonProps {
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
    variant?: "text" | "outlined" | "contained";
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    type?: "button" | "submit" | "reset";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    isLoading?: boolean;
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

const GenericButton: React.FC<GenericButtonProps> = ({
    onClick,
    children,
    className,
    variant = "contained",
    color = "primary",
    type = "button",
    size = "medium",
    disabled = false,
    isLoading = false,
}) => {
    return (
        <ThemeProvider theme={theme}>
            <Button
                variant={variant}
                color={color}
                onClick={onClick}
                type={type}
                size={size}
                disabled={disabled || isLoading}
                className={className}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                {isLoading && (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                        <CircularProgress
                            color="primary"
                            size={20}
                        />
                    </Box>
                )}
                <Box sx={{ visibility: isLoading ? 'hidden' : 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {children}
                </Box>
            </Button>
        </ThemeProvider>
    );
};

export default GenericButton;
