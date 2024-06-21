import { useState } from "react";

const useImageUploader = (initialImage?: string) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(initialImage?? null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return {
        selectedImage,
        handleImageChange,
    };
};

export default useImageUploader;
