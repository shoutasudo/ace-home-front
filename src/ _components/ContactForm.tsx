'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import http from '@/lib/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ContactRadioBtn from './ContactRadioBtn'
import ContactInputForm from './ContactInputForm'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import '@/css/doubleLineBtn.css'

// radio button (FormInput name = contactType)
const RadioContent: Array<{ id: string; content: string }> = [
    {
        id: "1",
        content: "ACE HOMEについて"
    },
    {
        id: "2",
        content: "物件について"
    },
    {
        id: "3",
        content: "リフォームについて"
    },
    {
        id: "4",
        content: "売買について"
    },
    {
        id: "5",
        content: "求人について"
    },
    {
        id: "6",
        content: "その他のお問合せについて"
    },
]

// text input (FormInput name = $id)
const InputField: Array<{ id: keyof FormData; requiredMark: boolean; placeholder: string; children: string }> = [
    {
        id: "name",
        requiredMark: true,
        placeholder: "例）山田　花子",
        children: "お名前",
    },
    {
        id: "companyName",
        requiredMark: false,
        placeholder: "例）株式会社ACE HOME",
        children: "会社名",
    },
    {
        id: "telNumber",
        requiredMark: true,
        placeholder: "例）09012345678",
        children: "電話番号",
    },
    {
        id: "email",
        requiredMark: true,
        placeholder: "aaa@aaa.com",
        children: "メールアドレス",
    },
]

// FormData Types
interface FormData {
    contactType: string,
    name: string,
    companyName: string,
    telNumber: string,
    email: string,
    content: string,
}

// validation
export const ContactFormSchema = z
    .object({
        contactType: z
            .string(),
        name: z
            .string()
            .min(1, { message: 'お名前を入力してください'}),
        companyName: z
            .string(),
        telNumber: z
            .string()
            .min(1, { message: '電話番号を入力してください'})
            .regex(/^\d{10,11}$/, { message: '正しい電話番号を入力してください'}),
        email: z
            .string()
            .min(1, { message: 'メールアドレスを入力してください'})
            .email({ message: '正しいメールアドレスの形式を入力してください'})
            .max(100, { message: 'メールアドレスが長すぎます'}),
        content: z
            .string()
            .min(1, { message: 'お問い合わせ内容は必須です'}),
    })
export type ContactFormType = z.infer<typeof ContactFormSchema>

const ContactForm = () => {
    // checkbox validation
    const [isInitial, setIsInitial] = useState(true)
    const [isChecked, setIsChecked] = useState(false)

    const handleCheck = async () => {
        setIsChecked(!isChecked)
        setIsInitial(false)
    }

    // input form
    const methods = useForm<ContactFormType>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            contactType: '',
            name: '',
            companyName: '',
            telNumber: '',
            email: '',
            content: ''
        }
    })

    const {
        register,
        formState: { errors, isValid },
        watch,
        handleSubmit
    } = methods

    // watch input fields (初期状態はvalidationが有効になっていないため)
    const [isInputed, setIsInputed] = useState(false)
    const watchedFields = watch([
        'contactType',
        'name',
        'telNumber',
        'email',
        'content'
    ])
    useEffect (() => {
        if (Object.values(watchedFields).some(value => value !== '')) {
            setIsInputed(true)
        }
    }, [watchedFields])

    const router = useRouter()

    // API POST
    const onSubmit = async (data: FormData) => {
        try {
            // console.log(data)
            http.post('/api/contact', data, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(() => {
                router.push('/')
            })
        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="contact-contents w-full">
                    <div className="contact-content-contact-detail md:px-6 px-0 my-7">
                        {RadioContent.map((item) => (
                            <div className="flex justify-start items-center mt-3" key={item.id}>
                                <ContactRadioBtn
                                    id={`radio${item.id}`}
                                    value={item.id}
                                    register={register('contactType')}
                                >
                                    {item.content}
                                </ContactRadioBtn>
                            </div>
                        ))}
                        <div className="h-4 text-sm text-red-500">
                            {errors.contactType?.message}
                        </div>
                    </div>
                    <div className="contact-content-user-detail mt-5 md:px-6 px-0">
                        {InputField.map((item) => (
                            <div className="text-sm noto-sans-jp font-normal mb-3" key={item.id}>
                                <ContactInputForm
                                    id={item.id}
                                    requiredMark={item.requiredMark}
                                    placeholder={item.placeholder}
                                    register={register(item.id)}
                                    errMessage={errors[item.id]?.message}
                                >
                                    {item.children}
                                </ContactInputForm>
                            </div>
                        ))}
                        <div className="content-filed text-sm noto-sans-jp font-normal mt-5">
                            <div>
                                <label
                                    htmlFor="content"
                                    className="zen-kaku-regular text-sm ml-1 tracking-wide">
                                    <span className="text-mainPink mr-2">
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </span>
                                    内容
                                    <span className="text-mainPink ml-1">
                                        ※
                                    </span>
                                </label>
                            </div>
                            <textarea
                                id="content"
                                rows={10}
                                className="w-full border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
                                placeholder="1000文字以内でお書きください"
                                {...register('content')}
                            ></textarea>
                            <div className="h-4 text-sm text-red-500">
                                {errors.content?.message}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-considerations w-full mt-5">
                    <div className="contact-considerations-1 px-5">
                        <div className="contact-considerations-1-title">
                            <h1 className="noto-sans-jp text-md font-bold tracking-wide">お問合せに関する注意事項</h1>
                        </div>
                        <div className="contact-considerations-1-description mt-2">
                            <p className="text-sm noto-sans-jp tracking-wide leading-6">お問合せへのご回答に、数日いただく場合がございますので予めご了承くださいませ。弊社より送信する返答は、お客様個人宛てに、お客様からいただいたご質問にお答えすることを目的としております。返答メールの一部または全体を転用や、二次利用されることはご遠慮ください。
                                残念ながら、いただいたメールすべてにはお返事を差し上げられない場合がございます。予めご了承ください。</p>
                        </div>
                    </div>
                    <div className="contact-considerations-1 px-5 mt-5">
                        <div className="contact-considerations-2-title">
                            <h1 className="noto-sans-jp text-md font-bold tracking-wide">お客様からいただいた個人情報について</h1>
                        </div>
                        <div className="contact-considerations-2-description mt-2">
                            <p className="text-sm noto-sans-jp tracking-wide leading-6">お客様よりいただいた個人情報につきましては、弊社個人情報保護方針に則り厳重に管理するとともに、お問合せ対応以外に使用することはございません。</p>
                        </div>
                    </div>
                </div>
                <div className="contact-considerations-check flex justify-center items-center mt-5">
                    <input
                        name="considerationsCheck"
                        type="checkbox"
                        id="considerationsCheck"
                        checked={isChecked}
                        onClick={handleCheck}
                        className="h-5 w-5 border-gray-300 mr-5 checked:bg-mainPink" />
                    <label htmlFor="considerationsCheck">弊社個人情報保護方針を確認、同意する</label>
                </div>
                <div className="h-4">
                    {!isChecked && !isInitial && (
                        <div className="text-sm text-red-500 text-center">
                            弊社個人情報保護方針をご確認し、同意にチェックを入れてください。
                        </div>
                    )}
                </div>

                <div className="information-container-more-btn mt-8">
                    <div className="center btn_more z-10">
                        <button
                            type="submit"
                            className="bdr_btn disabled:bg-slate-200 disabled:cursor-default disabled:hover:bg-slate-200"
                            disabled={!isInputed || !isChecked || !isValid}
                        >
                            <span>
                                確認 <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}

export default ContactForm
