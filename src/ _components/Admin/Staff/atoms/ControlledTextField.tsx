// atoms/ControlledTextField.tsx
import React from 'react';
import { TextField } from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface Props {
    name: string;
    control: Control<any>;
    defaultValue: any;
    label: string;
    errors: any;
    marginTop?: number;
}
const ControlledTextField: React.FC<Props> = ({ name, control, defaultValue, label, errors, marginTop = 0 }) => (
    <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
            <TextField
                sx={{ mt: marginTop }}
                id={name}
                label={label}
                error={!!errors[name]}
                helperText={errors[name] ? errors[name].message : ''}
                {...field}
            />
        )}
    />
);

export default ControlledTextField;
