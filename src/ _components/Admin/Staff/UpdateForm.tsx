'use client'

import { Staff } from "@/app/(admin)/admin/(auth)/staff/[staffId]/page"
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, CircularProgress, Container, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
    staff: Staff
};

const UpdateForm: React.FC<Props> = ({ staff }) => {
    const [isProceeding, setIsProceeding] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(staff.image);

    const router = useRouter();

    const schema = z.object({
        name: z.string()
            .min(1, {
                message: '名前は必須項目です'
            })
            .max(32, {
                message: '名前は32文字以下で入力してください'
            }),
        comment: z.string()
            .min(1, {
                message: 'ひとことは必須項目です'
            })
            .max(20, {
                message: 'ひとことは20文字以下で入力してください'
            }),
        role: z.string()
            .min(1, {
                message: '役職は必須項目です'
            })
            .max(10, {
                message: '役職は10文字以下で入力してください'
            }),
        image: z.instanceof(File, {
            message: '画像は必須項目です'
        }).optional(),
    });

    type StaffData = z.infer<typeof schema>;

    const { control, handleSubmit, formState: { errors } } = useForm<StaffData>({
        mode: 'onTouched',
        resolver: zodResolver(schema),
        defaultValues: {
            name: staff.name,
            comment: staff.comment,
            role: staff.role,
            image: undefined
        }
    });

    const onSubmit = async (data: StaffData) => {
        try {
            setIsProceeding(true);
            console.log('data:  ' + JSON.stringify(data));
            // 画像データ送信のためFormDataに詰め替えてRouteHandlerに送信
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('comment', data.comment);
            formData.append('role', data.role);
            formData.append('id', staff.id);
            //画像に変更ない場合、ここに入ってこないよな?
            if(data.image) formData.append('image', data.image);

            const res = await fetch(`http://localhost:3000/api/staff/update`, {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`データフェッチに失敗しました: ${res.status} - ${errorText}`);
            }
            await router.push('/admin/staff/list');
        } catch (error) {
            console.error(error);
            setError(true);
        } finally {
            setIsProceeding(false);
        }
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
        }
    }
    return (
        <Container maxWidth="sm" sx={{ pt: 5 }}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                <Stack spacing={2}>
                    <Controller
                        name="image"
                        control={control}
                        defaultValue={undefined}
                        render={({ field }) => (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Button
                                    variant="contained"
                                    component="label"
                                    color="primary"
                                >
                                    画像をアップロード
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*"
                                        onChange={(e) => {
                                            field.onChange(e.target.files?.[0]);
                                            handleImageChange(e);
                                        }}
                                    />
                                </Button>
                                {errors.image && (
                                    <Typography color="error" variant="body2">
                                        {errors.image.message}
                                    </Typography>
                                )}
                                {/* 画像プレビュー */}
                                {selectedImage && (
                                    <Box mt={2}>
                                        <Image
                                            src={selectedImage}
                                            alt="Selected"
                                            style={{ maxWidth: '100%' }}
                                            width={100}
                                            height={100}
                                        />
                                    </Box>
                                )}
                            </Box>
                        )}
                    />
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                sx={{ mt: 3 }}
                                id="name"
                                label="名前"
                                error={!!errors.name}
                                helperText={errors.name ? errors.name.message : ''}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name="comment"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                id="comment"
                                label="ひとこと"
                                error={!!errors.comment}
                                helperText={errors.comment ? errors.comment.message : ''}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name="role"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                id="role"
                                label="役職"
                                error={!!errors.role}
                                helperText={errors.role ? errors.role.message : ''}
                                {...field}
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        size="large"
                        disabled={isProceeding}
                    >
                        {/* 通信中はローディングUI表示＆ボタン非活性化 */}
                        {isProceeding && (
                            <CircularProgress
                                sx={{ mr: 2 }}
                                color="secondary"
                                size={20}
                            />
                        )}
                        送信
                    </Button>
                    <Button type="button" color="primary" variant="contained" size="large" onClick={() => router.back()}>
                        戻る
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
}
export default UpdateForm;
