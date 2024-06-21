import React from 'react';
import ControlledTextField from '../../atoms/ControlledTextField';


interface Props {
    control: any;
    errors: any;
}

const CommentField: React.FC<Props> = ({ control, errors }) => (
    <ControlledTextField
        name="comment"
        control={control}
        defaultValue=""
        label="ひとこと"
        errors={errors}
    />
);

export default CommentField;
