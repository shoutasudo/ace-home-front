"use client";
import {
    Box,
    TextField,
    Typography,
    Select,
    MenuItem,
    SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { MuiFileInput } from "mui-file-input";
import Image from "next/image";
import AttachFileIcon from "@mui/icons-material/AttachFile";
// import { EditorState, ContentState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const InformationRegister = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [select, setSelect] = useState<string | undefined>();
    const [editorEnable, setEditorEnable] = useState(false);
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    useEffect(() => {
        // コンポーネントがマウントされた後にsetEditorEnableを呼び出す
        setEditorEnable(true);
    }, []);

    const handleFileChange = (newValue: File | null) => {
        if (newValue) {
            setSelectedFile(newValue);
            setPreview(URL.createObjectURL(newValue));
        }
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] h-fit my-10 bg-gray-100 rounded-xl flex justify-center">
                <div className="w-[90%]">
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <div className="grid grid-cols-2 gap-x-5">
                            <div className="col-span-1 ">
                                <Typography
                                    variant="body1"
                                    component="h6"
                                    mt={1}
                                    gutterBottom
                                >
                                    タイトル入力
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    color="primary"
                                    id="title"
                                    label="タイトル"
                                    name="title"
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
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={select}
                                    fullWidth
                                    onChange={(e: SelectChangeEvent) => {
                                        setSelect(e.target.value);
                                    }}
                                >
                                    <MenuItem value={10}>新着</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </div>
                            <div className="col-span-1">
                                <div>
                                    <Typography
                                        variant="body1"
                                        component="h6"
                                        mt={1}
                                        gutterBottom
                                    >
                                        ファイル選択
                                    </Typography>
                                    <MuiFileInput
                                        value={selectedFile}
                                        onChange={handleFileChange}
                                        variant="outlined"
                                        InputProps={{
                                            inputProps: {
                                                accept: "image/*",
                                            },
                                            startAdornment: <AttachFileIcon />,
                                        }}
                                    />
                                    <br />
                                    <Typography
                                        variant="caption"
                                        component="div"
                                        gutterBottom
                                    >
                                        PNG/JPEG
                                        ファイルのみ、ファイルサイズは5MB以内。
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
                            {/* <div className="col-span-2 pb-10">
                                {editorEnable && (
                                    <div>
                                        <h1>editor</h1>
                                        <div>
                                            <Editor
                                                placeholder="入力してください"
                                                editorState={editorState}
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                onEditorStateChange={
                                                    setEditorState
                                                }
                                                localization={{
                                                    locale: "ja",
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div> */}
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default InformationRegister;
