"use client";
import { Editor as TipTapEditor, EditorContent, JSONContent } from "@tiptap/react";
import { useTipTap } from '../../../hooks/useTipTap';
import Bubble from './Bubble';
import Floating from './Floating';
import ToolBar from './ToolBar';

interface EditorpProps {
    editor:TipTapEditor | null
    fontSizeOption: number[];
    fontOption: string[][];
}

const Editor: React.FC<EditorpProps> = ({ editor, fontSizeOption, fontOption}) => {

    return (
        <>
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
