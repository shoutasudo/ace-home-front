import useImageUploader from "@/hooks/Staff/useImageUploader";
import useRegisterForm from "@/hooks/Staff/useRegisterForm";
import StaffForm from "../organisms/StaffForm";

const RegisterForm: React.FC = () => {
    const { control, handleSubmit, errors, onSubmit, isProceeding } = useRegisterForm();
    const { selectedImage, handleImageChange } = useImageUploader();
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
    )
}

export default RegisterForm;
