// organisms/ImageUpload.tsx
import React from 'react';
import { Box, Button } from "@mui/material";
import { Controller, Control } from "react-hook-form";
import ErrorMessage from "../../atoms/ErrorMessage";
import ImagePreview from '../../atoms/ImagePreview';

interface Props {
    control: Control<any>;
    errors: any;
    selectedImage: string | null;
    handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploader: React.FC<Props> = ({ control, errors, selectedImage, handleImageChange }) => (
    <Controller
        name="image"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Button
                    variant="contained"
                    component="label"
                    color="primary"
                >
                    画像をアップロード
                    <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) => {
                            field.onChange(e.target.files?.[0]);
                            handleImageChange(e);
                        }}
                    />
                </Button>
                {errors.image && (
                    <ErrorMessage message={errors.image.message as string}/>
                )}
                {selectedImage && (
                    <ImagePreview imageUrl={selectedImage} />
                )}
            </Box>
        )}
    />
);

export default ImageUploader;
