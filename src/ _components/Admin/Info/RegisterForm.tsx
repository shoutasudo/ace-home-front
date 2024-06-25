"use client";
import {
    Box,
    TextField,
    Typography,
    Select,
    MenuItem,
    Button,
} from "@mui/material";
import React from "react";
import { MuiFileInput } from "mui-file-input";
import Image from "next/image";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Controller} from "react-hook-form";
import Editor from "../TipTap/Editor";
import { useInfoForm } from "@/hooks/useInfoForm";

interface RegisterFormProps {
    infoId: string | null
}

const RegisterForm = ({ infoId = null }: RegisterFormProps) => {
    const {
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
    } = useInfoForm(infoId)

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
                                value={field.value} // valueをfield.valueに設定
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
                                <MenuItem value="新着" selected={defaultValue?.tag == '新着'} >新着</MenuItem>
                                <MenuItem value="Twenty" selected={defaultValue?.tag == 'お知らせ'} >お知らせ</MenuItem>
                                <MenuItem value="Thirty" selected={defaultValue?.tag == 'キャンペーン'} >キャンペーン</MenuItem>
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
                                editor={editor}
                                fontSizeOption={fontSizeOption}
                                fontOption={fontOption}
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
            <div className="w-full flex justify-end mb-10">
                <Button type="submit" variant="outlined">登録</Button>
            </div>
        </Box>
    );
};

export default RegisterForm;
