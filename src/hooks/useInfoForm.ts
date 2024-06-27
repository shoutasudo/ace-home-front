import { zodResolver } from "@hookform/resolvers/zod";
import { Editor, JSONContent } from "@tiptap/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTipTap } from "./useTipTap";
import { z } from "zod";
import { ImageBody, detailValue, formData, zodObjType } from "@/types/information";
import { v4 as uuidv4 } from 'uuid';



const nodeSchema = z.object({
    type: z.string(),
    attrs: z.record(z.any()).optional(),
    content: z.lazy(() => z.array(nodeSchema)).optional(),
    marks: z
        .array(
            z.object({
                type: z.string(),
                attrs: z.record(z.any()).optional(),
            })
        )
        .optional(),
    text: z.string().optional(),
}) as z.ZodType<zodObjType>;

const RegisterSchema = z.object({
    title: z.string().nonempty("タイトルは必須です"),
    tag: z.string().nonempty("タグは必須です"),
    file: z
        .any()
        .refine(
            (file) =>
                file &&
                (file.type === "image/png" || file.type === "image/jpeg"),
            "PNG/JPEG ファイルのみサポートされています。"
        )
        .refine(
            (file) => file && file.size <= 5 * 1024 * 1024,
            "ファイルサイズは5MB以内にしてください。"
        ),
    content: z.object({
        type: z.literal("doc"),
        content: z.array(nodeSchema),
    })
    // .required("contentフィールドは必須です"),
});

const EditSchema = z.object({
    title: z.string().nonempty("タイトルは必須です"),
    tag: z.string().nonempty("タグは必須です"),
    content: z.object({
        type: z.literal("doc"),
        content: z.array(nodeSchema),
    })
    // .required("contentフィールドは必須です"),
});

export const useInfoForm = (infoId: string | null) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | StaticImport | null>(null);
    const [defaultValue, setDefaultValue] = useState<detailValue | null>(null)
    const router = useRouter();
    const {
        handleSubmit,
        control,
        setValue,
        getValues,
        formState: { errors },
    } = useForm<formData>({
        resolver: zodResolver(infoId === null ? RegisterSchema : EditSchema),
        defaultValues: {
            title: '',
            tag: ''
        },
    });
    const content = getValues('content')

    const setContent = (value: JSONContent) => setValue("content", value)

    const defaultContent = defaultValue?.content


    const { editor, fontSizeOption, fontOption } = useTipTap({ content, setContent, defaultContent });



    useEffect(() => {
        if (infoId !== null) {
            const getDetail = async (infoId: string) => {
                const res = await fetch(process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/admin/information/edit/" + infoId);
                const responseBody: detailValue = await res.json();
                setValue('uuid', responseBody.uuid);
                setValue('title', responseBody.title);
                setValue('tag', responseBody.tag);
                setValue('content', responseBody.content);
                setDefaultValue(responseBody)
                setPreview(responseBody.img_path);
            }

            getDetail(infoId)
        }
    }, [infoId, setValue])





    const handleFileChange: (value: File | null) => void = (file) => {
        if (file) {
            setSelectedFile(file);
            setValue("file", file); // React Hook Formの値を更新
            const reader: FileReader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string | StaticImport;
                setPreview(result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };


    const updateAllImageSrc = async (editor: Editor | null, uuid: string) => {
        if (editor) {
            const srcArray: Array<string> = []
            const imageNodes: { node: any; pos: number }[] = [];

            // 画像ノードを収集する
            editor.chain().focus().command(({ state, dispatch }) => {
                state.doc.descendants((node, pos) => {
                    if (node.type.name === 'image') {
                        imageNodes.push({ node, pos });
                    }
                    return true; // 全てのノードをチェックするために true を返す
                });

                return true; // コマンドが正常に実行されたことを示すために true を返す
            }).run();

            // 非同期で画像ノードの src を更新する
            for (const { node, pos } of imageNodes) {
                const body = {
                    src: node.attrs.src,
                    uuid: uuid
                };
                try {
                    const newSrc = await imageStore(body);

                    srcArray.push(newSrc);
                    // setSrcArrayを正しく使用する

                    // エディタのトランザクションを作成
                    editor.chain().focus().command(({ state, dispatch }) => {
                        let transaction = state.tr;

                        const attrs = {
                            ...node.attrs,
                            src: newSrc,
                        };

                        transaction = transaction.setNodeMarkup(pos, undefined, attrs);

                        if (dispatch) {
                            dispatch(transaction);
                        }

                        return true;
                    }).run();



                } catch (error) {
                    console.error('Failed to update image source:', error);
                }
            }
            return srcArray

        }
    };

    const imageStore = async (body: ImageBody): Promise<string> => {
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/admin/information/storeImage", {
                method: 'POST',
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                throw new Error(`Failed to store image: ${res.status} - ${res.statusText}`);
            }

            const responseBody = await res.json(); // Response bodyを読み取る

            return responseBody;
        } catch (error) {
            console.error('Error storing image:', error);
            throw error; // エラーを再スローしてエラーハンドリングを行う
        }
    };

    const filesExcept = async (uuid: string, srcArray: Array<string> | undefined): Promise<void> => {
        try {
            const body = {
                uuid: uuid,
                exclude_paths: srcArray
            }

            const res = await fetch(process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/admin/information/filesExcept", {
                method: 'POST',
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                throw new Error(`Failed to store image: ${res.status} - ${res.statusText}`);
            }

            const responseBody = await res.json(); // Response bodyを読み取る

            return responseBody;
        } catch (error) {
            console.error('Error storing image:', error);
            throw error; // エラーを再スローしてエラーハンドリングを行う
        }
    };

    const informationRegister = async (data: formData, uuid: string) => {
        const formData = new FormData();
        formData.append('uuid', uuid);
        formData.append('title', data.title);
        formData.append('tag', data.tag);
        formData.append('file', getValues('file'));
        formData.append('content', JSON.stringify(editor?.getJSON()));
        const res = await fetch(process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/admin/information/register", {
            method: 'POST',
            body: formData,
        });
        const responseBody = await res.json(); // Response bodyを読み取る
    }

    const informationUpdate = async (data: formData) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('tag', data.tag);
        formData.append('file', getValues('file'));
        formData.append('content', JSON.stringify(editor?.getJSON()));
        const res = await fetch(process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/admin/information/update?infoId=" + infoId, {
            method: 'POST',
            body: formData,
        });
    }

    const onSubmit: SubmitHandler<formData> = async (data: formData) => {
        try {
            if (infoId === null) {
                const uuid: string = await uuidv4();
                const srcArray = await updateAllImageSrc(editor, uuid)

                await filesExcept(uuid, srcArray)
                await informationRegister(data, uuid)

            } else {
                if (defaultValue) {
                    const uuid = defaultValue.uuid
                    const srcArray = await updateAllImageSrc(editor, uuid)
                    await filesExcept(uuid, srcArray)
                    await informationUpdate(data)
                }
            }
            router.push('/admin/information/list')
        } catch (error) {
            console.log("Response Data:", error);
        }
    };

    return {
        handleSubmit,
        onSubmit,
        control,
        errors,
        defaultValue,
        selectedFile,
        handleFileChange,
        preview,
        fontSizeOption,
        fontOption,
        editor
    }
}
