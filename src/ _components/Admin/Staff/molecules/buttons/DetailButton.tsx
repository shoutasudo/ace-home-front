'use client'

import GenericButton from "../../atoms/GenericButton";

interface DetailButtonProps {
    onClick: () => void;
}

const DetailButton: React.FC<DetailButtonProps> = ({ onClick }) => {
    return (
        <GenericButton onClick={onClick} variant="outlined">
            詳細
        </GenericButton>
    );
}

export default DetailButton;
