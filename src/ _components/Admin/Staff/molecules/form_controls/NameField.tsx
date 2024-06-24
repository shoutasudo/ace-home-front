// molecules/NameField.tsx
import React from 'react';
import ControlledTextField from '../../atoms/ControlledTextField';

interface Props {
    control: any;
    errors: any;
    marginTop?: number;
}

const NameField: React.FC<Props> = ({ control, errors, marginTop = 0 }) => (
    <ControlledTextField
        name="name"
        control={control}
        defaultValue=""
        label="名前"
        errors={errors}
        marginTop={marginTop}
    />
);

export default NameField;
