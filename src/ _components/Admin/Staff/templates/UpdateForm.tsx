'use client'

import React from "react"
import useUpdateForm from "@/hooks/Staff/useUpdateForm";
import useImageUploader from "@/hooks/Staff/useImageUploader";
import { Staff } from "@/types/staff";
import StaffForm from "../organisms/StaffForm";

interface Props {
    staff: Staff
};

const UpdateForm: React.FC<Props> = ({ staff }) => {
    const { control, handleSubmit, errors, onSubmit, isProceeding } = useUpdateForm(staff);
    const { selectedImage, handleImageChange } = useImageUploader(staff.image);
    return (
        <StaffForm
            control={control}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            isProceeding={isProceeding}
            selectedImage={selectedImage}
            handleImageChange={handleImageChange}
        />
    );
}
export default UpdateForm;
