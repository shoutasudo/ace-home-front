import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ToolBarProps {
    editor: any;
    fontSizeOption:Array<number>
    fontOption: Array<Array<String>>
}

const ToolBar: React.FC<ToolBarProps> = ({ editor,fontSizeOption,fontOption }) => {
    return (
        <div className="border-b border-solid border-black bg-white w-full min-h-10 ">
            <div className="grid grid-cols-10 gap-x-4 items-center px-3">
                <div className="p-2 col-span-1">
                    <p className="text-[0.8rem] w-full flex justify-center font-bold">
                        文字色
                    </p>
                    <div className="w-full flex justify-center">
                        <input
                            type="color"
                            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
                                editor
                                    .chain()
                                    .focus()
                                    .setColor(event.target.value)
                                    .run()
                            }
                            value={
                                editor.getAttributes("textStyle").color ||
                                "#000000"
                            }
                            data-testid="setColor"
                        />
                    </div>
                </div>
                <div className="p-1 col-span-1">
                    <p className="text-[0.8em] w-full flex justify-center font-bold">
                        文字サイズ
                    </p>
                    <div className="w-full flex justify-center">
                        <select
                            onChange={(event) => {
                                editor.commands.setFontSize(event.target.value);
                            }}
                        >
                            {fontSizeOption &&
                                fontSizeOption.map((num, index) => {
                                    return (
                                        <option key={index} value={num}>
                                            {num}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>
                </div>
                <div className="col-span-1">
                    <p className="text-[0.8em] font-bold">フォント</p>
                    <div>
                        <select
                            onChange={(e) =>
                                editor
                                    .chain()
                                    .focus()
                                    .setFontFamily(e.target.value)
                                    .run()
                            }
                        >
                            {fontOption &&
                                fontOption.map((font, index) => {
                                    return (
                                        <option key={index} value={String(font[0])}>
                                            {font[1]}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>
                </div>
                <div className="flex justify-between px-5 col-span-1">
                    <button
                        type="button"
                        onClick={() => editor.commands.undo()}
                        data-test-id="unsetFontFamily"
                        disabled={!editor.can().undo()}
                        className={
                            !editor.can().undo()
                                ? "opacity-50"
                                : "hover:opacity-70 w-full text-start"
                        }
                    >
                        <p className=" font-bold">
                            <ArrowBackIcon />
                        </p>
                    </button>
                    <button
                        type="button"
                        onClick={() => editor.commands.redo()}
                        data-test-id="unsetFontFamily"
                        disabled={!editor.can().redo()}
                        className={
                            !editor.can().redo()
                                ? "opacity-50"
                                : "hover:opacity-70 w-full text-start"
                        }
                    >
                        <p className="">
                            <ArrowForwardIcon />
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToolBar;
