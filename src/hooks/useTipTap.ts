import FileHandler from "@tiptap-pro/extension-file-handler";
import ImageResize from "tiptap-extension-resize-image";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import StarterKit from "@tiptap/starter-kit";
import { HTMLContent, JSONContent, generateHTML, useEditor } from "@tiptap/react";
import { useEffect, useState } from "react";

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the font size
             */
            setFontSize: (size: string) => ReturnType;
            /**
             * Unset the font size
             */
            unsetFontSize: () => ReturnType;
        };
    }
}

const FontSize = TextStyle.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            fontSize: {
                default: null,
                parseHTML: (element) =>
                    element.style.fontSize.replace("px", ""),
                renderHTML: (attributes) => {
                    if (!attributes["fontSize"]) {
                        return {};
                    }
                    return {
                        style: `font-size: ${attributes["fontSize"]}px`,
                    };
                },
            },
        };
    },

    addCommands() {
        return {
            ...this.parent?.(),
            setFontSize:
                (fontSize) =>
                    ({ commands }) => {
                        return commands.setMark(this.name, { fontSize: fontSize });
                    },
            unsetFontSize:
                () =>
                    ({ chain }) => {
                        return chain()
                            .setMark(this.name, { fontSize: null })
                            .removeEmptyTextStyle()
                            .run();
                    },
        };
    },
});

interface tipTapProp {
    content: JSON | JSONContent | string;
    setContent: (content: JSONContent) => void;
    defaultContent: JSONContent | undefined;
}

export const useTipTap = ({ content, setContent, defaultContent }: tipTapProp) => {

    // エディター初期化
    const editor = useEditor({
        editorProps: {
            attributes: {
                class: "focus:outline-none min-h-[30vh]",
            },
        },
        extensions: [
            StarterKit,
            FontSize,
            FontFamily.configure({
                types: ["textStyle"],
            }),
            ImageResize,
            TextStyle,
            Color,
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            FileHandler.configure({
                allowedMimeTypes: [
                    "image/png",
                    "image/jpeg",
                    "image/gif",
                    "image/webp",
                ],
                onDrop: (currentEditor, files, pos) => {
                    files.forEach((file) => {
                        const fileReader = new FileReader();
                        const type = file.type.startsWith("video/")
                            ? "video"
                            : "image"; // ファイルのタイプをチェック

                        const uniqueId = 'node_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9); // 一意のIDを生成

                        fileReader.readAsDataURL(file);

                        fileReader.onload = () => {
                            currentEditor
                                .chain()
                                .insertContentAt(pos, {
                                    type: type, // 動画か画像かによって type を設定
                                    attrs: {
                                        src: fileReader.result,
                                        id: uniqueId, // ノードにIDを追加
                                    },
                                })
                                .focus()
                                .run();
                        };
                    });
                },
                onPaste: (currentEditor, files, htmlContent) => {
                    files.forEach((file) => {
                        if (htmlContent) {
                            // HTMLコンテンツがある場合、他の拡張機能が挿入を処理するのを止める
                            return false;
                        }

                        const fileReader = new FileReader();
                        const type = file.type.startsWith("video/")
                            ? "video"
                            : "image"; // ファイルのタイプをチェック

                        fileReader.readAsDataURL(file);
                        fileReader.onload = () => {
                            currentEditor
                                .chain()
                                .insertContentAt(
                                    currentEditor.state.selection.anchor,
                                    {
                                        type: type, // 動画か画像かによって type を設定
                                        attrs: {
                                            src: fileReader.result,
                                        },
                                    }
                                )
                                .focus()
                                .run();
                        };
                    });
                },
            }),
        ],
        // defaultテキスト
        content: '',
        // エディタ内容が変更あるたびにreacthookformのValueにセット
        onUpdate: ({ editor }) => {
            const editorContent = editor.getJSON();
            setContent(editorContent);
        },
    });

    useEffect(() => {
        if (defaultContent !== undefined && editor !== null) {
            editor.commands.setContent(generateHTML(defaultContent, [
                StarterKit,
                FontSize,
                FontFamily,
                ImageResize,
                TextStyle,
                Color,
                FileHandler
            ])
            )
        }
    }, [defaultContent, editor])

    useEffect(() => {
        if (
            editor &&
            JSON.stringify(content) !== JSON.stringify(editor.getJSON())
        ) {
            editor.commands.setContent(content);
        }
    }, [editor]);

    const fontSizeOption = [14, 18, 22, 26, 30, 34, 38, 42, 46, 50];
    const fontOption = [
        ["Inter", "inter"],
        ["Comic Sans MS, Comic Sans", "Sans"],
        ["serif", "Serif"],
        ["monospace", "monospace"],
        ["cursive", "cursive"],
    ];

    return {
        editor,
        fontSizeOption,
        fontOption,
    };
};
