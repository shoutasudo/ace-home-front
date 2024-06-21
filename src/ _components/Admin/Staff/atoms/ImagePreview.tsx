import React from 'react';
import { Box } from "@mui/material";
import Image from "next/image";

interface Props {
    imageUrl: string;
}

const ImagePreview: React.FC<Props> = ({ imageUrl }) => (
    <Box mt={2}>
        <Image
            src={imageUrl}
            alt="Selected"
            style={{ maxWidth: '100%' }}
            width={100}
            height={100}
        />
    </Box>
);

export default ImagePreview;
