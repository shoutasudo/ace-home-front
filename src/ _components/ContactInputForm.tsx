import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

interface ContactInputFormProps {
    id: string,
    requiredMark: boolean,
    placeholder: string,
    children: string,
}

const ContactInputForm = ({ id, requiredMark, placeholder, children }: ContactInputFormProps) => {
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
                value=""
                className="w-full h-10 border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
                placeholder={placeholder}
            />
        </>
    )
}

export default ContactInputForm