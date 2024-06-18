"use client";
import {
    Box,
    TextField,
    Typography,
    Select,
    MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { MuiFileInput } from "mui-file-input";
import Image from "next/image";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Editor from "../TipTap/Editor";
import { useRouter } from 'next/navigation';


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
});

const schema = z.object({
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
    content: z
        .object({
            type: z.literal("doc"),
            content: z.array(nodeSchema),
        })
        .required("contentフィールドは必須です"),
});

const RegisterForm = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [select, setSelect] = useState<string | undefined>();
    const router = useRouter();

    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const handleFileChange = (file) => {
        setSelectedFile(file);
        setValue("file", file); // React Hook Formの値を更新
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('title',data.title);
        formData.append('tag',data.tag);
        formData.append('file',data.file);
        formData.append('content',JSON.stringify(data.content));
        try {
            const res = await fetch("http://localhost:3000/api/information/register", {
                method: 'POST',
                body: formData,
            });
            const responseBody = await res.json(); // Response bodyを読み取る
            console.log("Response Data:", responseBody);
            router.push('/admin/information/list')
        } catch (error) {
            console.log("Response Data:", error);
        }
    };

    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
        >
            <div className="grid grid-cols-2 gap-x-5">
                <div className="col-span-1">
                    <Typography
                        variant="body1"
                        component="h6"
                        mt={1}
                        gutterBottom
                    >
                        タイトル入力
                    </Typography>
                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant="outlined"
                                required
                                fullWidth
                                color="primary"
                                id="title"
                                label="タイトル"
                                error={!!errors.title}
                                helperText={
                                    errors.title ? errors.title.message : ""
                                }
                            />
                        )}
                    />
                </div>
                <div className="col-span-1">
                    <Typography
                        variant="body1"
                        component="h6"
                        mt={1}
                        gutterBottom
                    >
                        タグ
                    </Typography>
                    <Controller
                        name="tag"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                fullWidth
                                error={!!errors.tag}
                            >
                                <MenuItem value="新着">新着</MenuItem>
                                <MenuItem value="Twenty">Twenty</MenuItem>
                                <MenuItem value="Thirty">Thirty</MenuItem>
                            </Select>
                        )}
                    />
                </div>
                <div className="col-span-1">
                    <Typography
                        variant="body1"
                        component="h6"
                        mt={1}
                        gutterBottom
                    >
                        ファイル選択
                    </Typography>
                    <Controller
                        name="file"
                        control={control}
                        render={({ field }) => (
                            <MuiFileInput
                                {...field}
                                value={selectedFile}
                                onChange={handleFileChange}
                                variant="outlined"
                                InputProps={{
                                    inputProps: {
                                        accept: "image/*",
                                    },
                                    startAdornment: <AttachFileIcon />,
                                }}
                                error={!!errors.file}
                                helperText={
                                    errors.file ? errors.file.message : ""
                                }
                            />
                        )}
                    />
                    <Typography variant="caption" component="div" gutterBottom>
                        PNG/JPEG ファイルのみ、ファイルサイズは5MB以内。
                    </Typography>
                    {selectedFile &&
                        !(
                            selectedFile.type === "image/png" ||
                            selectedFile.type === "image/jpeg"
                        ) && (
                            <Typography
                                variant="caption"
                                component="div"
                                color="error.main"
                                gutterBottom
                            >
                                このファイルタイプはサポートしていません。
                            </Typography>
                        )}
                </div>
                <div className="col-span-1 flex justify-start">
                    <Box>
                        <Typography
                            variant="body1"
                            component="h6"
                            mt={1}
                            gutterBottom
                        >
                            プレビュー:
                        </Typography>
                        {preview && (
                            <div
                                style={{
                                    maxHeight: "300px",
                                    maxWidth: "100%",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={preview}
                                    alt="Selected File"
                                    width={150}
                                    height={150}
                                />
                            </div>
                        )}
                    </Box>
                </div>
                <div className="col-span-2 pb-10">
                    <Typography
                        variant="body1"
                        component="h6"
                        mt={1}
                        gutterBottom
                    >
                        コンテンツ
                    </Typography>
                    <Controller
                        name="content"
                        control={control}
                        render={({ field }) => (
                            <Editor
                                content={field.value}
                                onChange={(value) => setValue("content", value)}
                            />
                        )}
                    />
                    {errors.content && (
                        <Typography
                            variant="caption"
                            component="div"
                            color="error.main"
                            gutterBottom
                        >
                            {errors.content.message}
                        </Typography>
                    )}
                </div>
            </div>
            <button>登録</button>
        </Box>
    );
};

export default RegisterForm;
