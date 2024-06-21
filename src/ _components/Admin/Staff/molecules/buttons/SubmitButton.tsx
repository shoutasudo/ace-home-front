'use client'

import React from 'react';
import GenericButton from '../../atoms/GenericButton';


interface SubmitButtonProps {
    onClick?: () => void;
    isProceeding: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, isProceeding }) => {
    return (
        <GenericButton
            onClick={onClick}
            color="primary"
            variant="contained"
            type="submit"
            size="large"
            disabled={isProceeding}
            isLoading={isProceeding}
        >
            送信
        </GenericButton>
    );
};

export default SubmitButton;
