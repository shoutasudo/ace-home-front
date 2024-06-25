import { Editor, JSONContent } from "@tiptap/react";

export interface RowsObj {
    uuid: string;
    img_path: string;
    tag: string;
    title: string;
    created_at: string;
    update_at: string;
}

export interface TableBodyProps {
    setRows: React.Dispatch<React.SetStateAction<Array<RowsObj>>>;
    rows: Array<RowsObj>;
    page: number;
    rowsPerPage: number;
}

export interface RegisterFormProps {
    infoId: string | null
}

export interface EditorProps {
    editor:Editor | null
}


export type EditorFontsProps = EditorProps & {
    fontSizeOption: number[];
    fontOption: string[][];
}

export interface zodObjType {
    type: string;
    attrs?: Record<string, any>;
    content?: zodObjType[];
    marks?: { type: string; attrs?: Record<string, any> }[];
    text?: string;
}

export type formData = {
    uuid: string;
    title: string;
    tag: string;
    file: File;
    content: JSON | JSONContent;
}

export type detailValue = formData & {
    img_path: string;
    created_at: string;
    update_at: string;
}

export type ImageBody = {
    src: string;
    uuid: string;
};

export type ResponseBody = {
    success: boolean;
    message: string;
    // 必要に応じて追加のプロパティを定義
};

export interface tipTapProp {
    content: JSON | JSONContent | string;
    setContent: (content: JSONContent) => void;
    defaultContent: JSONContent | undefined;
}
