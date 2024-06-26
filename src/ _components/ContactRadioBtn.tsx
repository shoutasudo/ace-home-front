import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface ContentRadioBtnProps {
    id: string
    value: string
    children: string
    register?: UseFormRegisterReturn
}

export const ContactRadioBtn = (props: ContentRadioBtnProps) => {
    const { id, value, children, register} = props
    return (
        <>
            <input
                type="radio"
                name="title"
                id={id}
                value={value}
                {...register}
                className="h-4 w-4 mr-3 checked:bg-mainPink bg-gray-300 border-gray-200"
            />
            <label
                htmlFor={id}
                className="zen-kaku-regular text-xs ml-1 tracking-wide text-fontMainBrown">
                {children}
            </label>
        </>
    )
}

export default ContactRadioBtn
