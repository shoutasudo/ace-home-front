'use client'

import { useRouter } from 'next/navigation';
import { useState } from "react";
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, CircularProgress, Container, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import http from '@/lib/axios';

interface Props {
    message?: string
}

//TODO: formを別コンポーネントに
const StaffForm = () => {
    const [isProceeding, setIsProceeding] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
            name: '',
            comment: '',
            role: '',
            image: undefined
        }
    });

    const onSubmit = async (data: StaffData) => {
        try {
            setIsProceeding(true);
            // 画像データ送信のためFormDataに詰め替えてRouteHandlerに送信
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('comment', data.comment);
            formData.append('role', data.role);
            if(data.image) formData.append('image', data.image);

            const res = await fetch('http://localhost:3000/api/staff/store', {
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
        <section className="w-full mx-[100px] p-6 bg-white rounded-lg shadow-lg my-8">
            <section className="pb-4 border-b border-gray-300 space-y-5">
                <h1 className="text-2xl font-bold">スタッフ新規登録</h1>
            </section>
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
        </section>
    );
}

export default StaffForm;
