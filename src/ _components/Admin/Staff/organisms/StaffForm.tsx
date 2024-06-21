import { Box, Container, Stack } from "@mui/material";
import React from "react";
import BackButton from "../molecules/buttons/BackButton";
import SubmitButton from "../molecules/buttons/SubmitButton";
import ImageUploader from "../molecules/form_controls/ImageUploader";
import NameField from "../molecules/form_controls/NameField";
import CommentField from "../molecules/form_controls/CommentField";
import RoleField from "../molecules/form_controls/RoleField";

//staff用formのuiコンポーネント templates層から編集用/登録用のビジネスロジックを注入して使う
interface StaffFormProps {
    control: any;
    handleSubmit: any;
    errors: any;
    onSubmit: (data: any) => void;
    isProceeding: boolean;
    selectedImage: string | null;
    handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StaffForm: React.FC<StaffFormProps> = ({
    control,
    handleSubmit,
    errors,
    onSubmit,
    isProceeding,
    selectedImage,
    handleImageChange
}) => {
    return (
        <Container maxWidth="sm" sx={{ pt: 5 }}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                <Stack spacing={4}>
                    <ImageUploader
                        control={control}
                        errors={errors}
                        selectedImage={selectedImage}
                        handleImageChange={handleImageChange}
                    />
                    <NameField
                        control={control}
                        errors={errors}
                        marginTop={3}
                    />
                    <CommentField
                        control={control}
                        errors={errors}
                    />
                    <RoleField
                        control={control}
                        errors={errors}
                    />
                    <div className="flex justify-between w-full">
                        <BackButton />
                        <SubmitButton isProceeding={isProceeding} />
                    </div>
                </Stack>
            </Box>
        </Container>
    );
};

export default StaffForm;
