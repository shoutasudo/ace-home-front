'use client'

import StarterKit from "@tiptap/starter-kit";
import { generateHTML } from '@tiptap/html'
import { Extensions, JSONContent } from "@tiptap/react";
import FileHandler from "@tiptap-pro/extension-file-handler";
import ImageResize from "tiptap-extension-resize-image";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import Image from "next/image";
import Link from "next/link";

interface InfoDetailProps {
    infoDetail: {
        uuid: string;
        title: string;
        tag: string;
        img_path: string;
        content: JSONContent
        created_at: string;
        update_at: string;
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

export const InfoDetail = ({ infoDetail }: InfoDetailProps) => {
    const extensions: Extensions = [
        StarterKit,
        FontSize,
        FontFamily.configure({
            types: ["textStyle"],
        }),
        ImageResize,
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
        })
    ]

    const htmlContent = generateHTML(infoDetail.content, extensions)
    return (
        <div className="w-full">
            <div className="flex">
                <div className="bg-mainPink px-3 py-1 text-center w-fit flex justify-center">
                    <p className="text-white noto-sans-jp font-medium text-sm">
                        {infoDetail.tag}
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="font-bold text-lg text-center md:text-4xl">{infoDetail.title}</p>
            </div>
            <div className="flex justify-center my-10">
                <Image
                src={infoDetail.img_path}
                width={600}
                height={600}
                alt={infoDetail.title}
                />
            </div>
            <div className="w-full flex justify-center py-10 border-t border-solid border-gray-400">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
            <div>
                <Link href={'/'} className="bg-mainPink rounded-xl px-5 py-1 text-white">
                    戻る
                </Link>
            </div>
        </div>
    )
}
