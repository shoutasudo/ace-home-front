'use client'

import GenericButton from "../../atoms/GenericButton";

//atoms配下においた汎用ボタンコンポーネントにボタンの種類を与える
//ドメイン知識はorganismsから注入する molecules配下のコンポーネントには再利用性向上のためにドメイン知識を渡さずに行きたい
interface DeleteButtonProps {
    onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
    return (
        <GenericButton onClick={onClick} color="error" variant="outlined">
            削除
        </GenericButton>
    );
}

export default DeleteButton;
