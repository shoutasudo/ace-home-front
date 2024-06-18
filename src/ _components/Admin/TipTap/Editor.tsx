"use client";
import { EditorContent } from "@tiptap/react";
import { useTipTap } from '../../../hooks/useTipTap';
import Bubble from './Bubble';
import Floating from './Floating';
import ToolBar from './ToolBar';

interface EditorpProps {
    content: any;
    onChange: (content: any) => void;
}

const Editor: React.FC<EditorpProps> = ({ content, onChange }) => {
    const { editor, fontSizeOption, fontOption } = useTipTap(content,onChange);
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
