import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { z } from "zod";

const useStaffForm = (defaultValues: any, apiUrl: any) => {
    const [isProceeding, setIsProceeding] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

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
            .max(20, {
                message: '役職は20文字以下で入力してください'
            }),
        image: z.instanceof(File, {
            message: '画像は必須項目です'
        }).optional(),
    });

    type StaffData = z.infer<typeof schema>;

    const { control, handleSubmit, formState: { errors } } = useForm<StaffData>({
        mode: 'onTouched',
        resolver: zodResolver(schema),
        defaultValues: defaultValues
    });

    const onSubmit = async (data: StaffData) => {
        try {
            setIsProceeding(true);
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('comment', data.comment);
            formData.append('role', data.role);
            if (data.image) formData.append('image', data.image);

            const res = await fetch(apiUrl, {
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

    return {
        control,
        handleSubmit,
        errors,
        onSubmit,
        isProceeding,
        error,
    };
};

export default useStaffForm;
