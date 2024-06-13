'use client'

import { useRouter } from "next/router";
import { useState } from "react";
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const StaffForm = () => {
    const [isProceeding, setIsProceeding] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const router = useRouter();

    const schema = z.object({
        name: z.string()
               .min(1, {
                    message: '必須項目です'
                })
               .max(32, {
                    message: '32文字以下で入力してください'
                }),
        comment: z.string()
               .min(1, {
                    message: '必須項目です'
                })
               .max(20, {
                    message: '20文字以下で入力してください'
                }),
        role: z.string()
               .min(1, {
                    message: '必須項目です'
                })
               .max(10, {
                    message: '10文字以下で入力してください'
                }),
    });

    type FormData = z.infer<typeof schema>;

    const { control, handleSubmit, formState: { errors }} = useForm<FormData>({
        mode: 'onTouched',
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            comment: '',
            role: ''
        }
    });

    const onSubmit = async (data: FormData) => {
        try {
            setIsProceeding(true);
            const staffData = {
                name: data.name,
                comment: data.comment,
                role: data.role
            };
            console.log('送信データ　' + staffData);
        } catch (error) {
            console.error(error);
            setError(true);
        } finally {
            setIsProceeding(false);
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
            <section className="pb-4 border-b border-gray-300 space-y-5">
                <h1 className="text-2xl font-bold">スタッフ新規登録</h1>
            </section>
        </div>
    )

}

export default StaffForm;
