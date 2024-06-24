import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { FloatingMenu } from "@tiptap/react";

interface FloatingProps {
    editor: any;
}

const Floating: React.FC<FloatingProps> = ({ editor }) => {
    return (
        <FloatingMenu
            className="grid grid-cols-3 gap-x-2 border-b border-solid border-gray-400"
            editor={editor}
            tippyOptions={{ duration: 100 }}
        >
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
        </FloatingMenu>
    );
};

export default Floating;
