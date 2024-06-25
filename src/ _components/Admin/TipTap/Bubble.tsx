import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { BubbleMenu } from "@tiptap/react";
import { EditorProps } from "@/types/information";




const Bubble: React.FC<EditorProps> = ({ editor }) => {
    return (
        <BubbleMenu
            className="bg-black text-white grid grid-cols-1 rounded-xl min-w-[10vw] min-h-[5vh] items-center"
            editor={editor}
            tippyOptions={{
                duration: 100,
                placement: "bottom",
            }}
        >
            {editor &&
                <>
                    <div className="border-b border-solid border-white grid grid-cols-3 w-full">
                        <div className="border-r border-solid border-white w-full flex justify-center">
                            <button
                                type="button"
                                onClick={() =>
                                    editor.chain().focus().toggleBold().run()
                                }
                                className={editor.isActive("bold") ? "is-active" : ""}
                            >
                                <p className="font-bold">B</p>
                            </button>
                        </div>
                        <div className="border-r border-solid border-white w-full flex justify-center">
                            <button
                                type="button"
                                onClick={() =>
                                    editor.chain().focus().toggleItalic().run()
                                }
                                className={editor.isActive("italic") ? "is-active" : ""}
                            >
                                <p className="italic">I</p>
                            </button>
                        </div>
                        <div className="border-r border-solid border-white w-full flex justify-center">
                            <button
                                type="button"
                                onClick={() =>
                                    editor.chain().focus().toggleStrike().run()
                                }
                                className={editor.isActive("strike") ? "is-active" : ""}
                            >
                                <p>S</p>
                            </button>
                        </div>
                    </div>
                    <div className="border-b border-solid border-white grid grid-cols-3 w-full">
                        <div className="border-r border-solid border-white w-full flex justify-center">
                            <button
                                type="button"
                                onClick={() => editor.commands.setFontSize('14')}
                            >
                                <p>S</p>
                            </button>
                        </div>
                        <div className="border-r border-solid border-white w-full flex justify-center">
                            <button
                                type="button"
                                onClick={() => editor.commands.setFontSize('30')}
                            >
                                <p className="italic">M</p>
                            </button>
                        </div>
                        <div className="border-r border-solid border-white w-full flex justify-center">
                            <button
                                type="button"
                                onClick={() => editor.commands.setFontSize('50')}
                            >
                                <p>L</p>
                            </button>
                        </div>
                    </div>
                    <div className="border-b border-solid border-white grid grid-cols-3 w-full">
                        <div className="border-r border-solid border-white w-full flex justify-center">
                            <button
                                type="button"
                                onClick={() =>
                                    editor.chain().focus().setTextAlign("left").run()
                                }
                                className={
                                    editor.isActive({
                                        textAlign: "left",
                                    })
                                        ? "is-active"
                                        : ""
                                }
                            >
                                <FormatAlignLeftIcon />
                            </button>
                        </div>
                        <div className="border-r border-solid border-white w-full flex justify-center">
                            <button
                                type="button"
                                onClick={() =>
                                    editor.chain().focus().setTextAlign("center").run()
                                }
                                className={
                                    editor.isActive({
                                        textAlign: "center",
                                    })
                                        ? "is-active"
                                        : ""
                                }
                            >
                                <FormatAlignCenterIcon />
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="button"
                                onClick={() =>
                                    editor.chain().focus().setTextAlign("right").run()
                                }
                                className={
                                    editor.isActive({
                                        textAlign: "right",
                                    })
                                        ? "is-active"
                                        : ""
                                }
                            >
                                <FormatAlignRightIcon />
                            </button>
                        </div>
                    </div>
                </>
            }
        </BubbleMenu>
    );
};

export default Bubble;
