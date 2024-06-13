import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { UseFormRegisterReturn } from 'react-hook-form'

interface ContactInputFormProps {
    id: string
    requiredMark: boolean
    placeholder: string
    children: string
    register?: UseFormRegisterReturn
    errMessage?: string
}

export const ContactInputForm = (props: ContactInputFormProps) => {
    const { id, requiredMark, placeholder, children, register, errMessage } = props
    return (
        <>
            <div>
                <label
                    htmlFor={id}
                    className="zen-kaku-regular text-sm ml-1 tracking-wide">
                    <span className="text-mainPink mr-2">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                    {children}
                    {requiredMark ? (
                        <span className="text-mainPink ml-1">
                            ※
                        </span>
                    ) : ""}
                </label>
            </div>
            <input
                type="text"
                id={id}
                name={id}
                className="w-full h-10 border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
                placeholder={placeholder}
                {...register}
            />
            <div className="h-4">
                {errMessage ? (
                    <div className="text-sm text-red-500">
                        {errMessage}
                    </div>
                ) : ""}
            </div>
        </>
    )
}

export default ContactInputForm
