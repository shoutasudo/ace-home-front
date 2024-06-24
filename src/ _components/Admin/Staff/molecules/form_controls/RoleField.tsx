// molecules/RoleField.tsx
import React from 'react';
import ControlledTextField from '../../atoms/ControlledTextField';

interface Props {
    control: any;
    errors: any;
}

const RoleField: React.FC<Props> = ({ control, errors }) => (
    <ControlledTextField
        name="role"
        control={control}
        defaultValue=""
        label="役職"
        errors={errors}
    />
);

export default RoleField;
