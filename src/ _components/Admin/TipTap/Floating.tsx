import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { EditorProps } from "@/types/information";
import { FloatingMenu } from "@tiptap/react";




const Floating: React.FC<EditorProps> = ({ editor }) => {
    return (
        <FloatingMenu
            className="grid grid-cols-3 gap-x-2 border-b border-solid border-gray-400"
            editor={editor}
            tippyOptions={{ duration: 100 }}
        >
            {editor &&
                <>
                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().setTextAlign("left").run()
                        }
                        className={
                            editor.isActive({ textAlign: "left" }) ? "is-active" : ""
                        }
                    >
                        <FormatAlignLeftIcon />
                    </button>
                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().setTextAlign("center").run()
                        }
                        className={
                            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
                        }
                    >
                        <FormatAlignCenterIcon />
                    </button>
                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().setTextAlign("right").run()
                        }
                        className={
                            editor.isActive({ textAlign: "right" }) ? "is-active" : ""
                        }
                    >
                        <FormatAlignRightIcon />
                    </button>
                </>
            }
        </FloatingMenu>
    );
};

export default Floating;
