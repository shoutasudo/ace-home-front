'use client'

import { useRouter } from "next/navigation";
import GenericButton from "../../atoms/GenericButton";

const BackButton: React.FC = () => {
    const router = useRouter();
    return (
        <GenericButton onClick={() => router.back()} size="large" color="primary">
            戻る
        </GenericButton>
    );
}

export default BackButton;
