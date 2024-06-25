"use client";
import { Editor as TipTapEditor, EditorContent, JSONContent } from "@tiptap/react";
import Bubble from './Bubble';
import Floating from './Floating';
import ToolBar from './ToolBar';
import { EditorFontsProps } from "@/types/information";



const Editor: React.FC<EditorFontsProps> = ({ editor, fontSizeOption, fontOption}) => {

    return (
        <>
        <p className="text-sm">※画像はドラッグ＆ドロップで挿入してください</p>
            <div className="border border-solid border-black">
                {editor && (
                    <>
                        <Bubble editor={editor} />
                        <Floating editor={editor} />
                        <ToolBar editor={editor} fontSizeOption={fontSizeOption} fontOption={fontOption} />
                    </>
                )}

                <EditorContent
                    className="bg-white min-h-[30vh] focus-visible:outline-none"
                    editor={editor}
                />
            </div>
        </>
    );
};

export default Editor;
