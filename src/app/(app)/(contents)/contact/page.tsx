import React from 'react'
import '@/css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const ContactPage = () => {
    return (
        <>
            <div className="sns-list-card-content-sub-title">
                <h2 className="text-mainPink zen-kaku-black text-md">
                    CONTACT
                </h2>
            </div>
            <div className="sns-list-card-content-main-title">
                <h1 className="text-fontMainBrown zen-kaku-bold text-lg">
                    お問合せ
                </h1>
            </div>
            <div className="sns-list-card-content-description mt-4">
                <h3 className="text-gray-700 zen-kaku-regular text-xs text-center tracking-wide">
                    下記の項目に必要な情報を入力してください。
                </h3>
                <h3 className="text-gray-700 zen-kaku-regular text-xs text-center tracking-wide">
                    「<span className="text-mainPink">※</span>
                    」マークがある箇所は必ずご入力ください。
                </h3>
            </div>
            <div className="contact-banner w-full">
                <div className="bg-mainGray w-full my-4">
                    <h3 className="zen-kaku-medium text-sm p-2">
                        お問合せ内容
                        <span className="text-mainPink ml-1">※</span>
                    </h3>
                </div>
            </div>
            <div className="contact-contents w-full">
                <form>
                    <div className="contact-content-contact-detail">
                        <div className="flex justify-start items-center">
                            <input
                                type="radio"
                                id="radio1"
                                value="1"
                                className="h-3 w-3 checked:bg-mainPink bg-gray-300 border-none"
                            />
                            <label
                                htmlFor="radio1"
                                className="zen-kaku-regular text-sm ml-1 tracking-wide">
                                ACE HOMEについて
                            </label>
                        </div>
                        <div className="flex justify-start items-center mt-2">
                            <input
                                type="radio"
                                id="radio2"
                                value="2"
                                className="h-3 w-3 checked:bg-mainPink bg-gray-300 border-none"
                            />
                            <label
                                htmlFor="radio2"
                                className="zen-kaku-regular text-sm ml-1 tracking-wide">
                                物件について
                            </label>
                        </div>
                        <div className="flex justify-start items-center mt-2">
                            <input
                                type="radio"
                                id="radio3"
                                value="3"
                                className="h-3 w-3 checked:bg-mainPink bg-gray-300 border-none"
                            />
                            <label
                                htmlFor="radio3"
                                className="zen-kaku-regular text-sm ml-1 tracking-wide">
                                求人について
                            </label>
                        </div>
                        <div className="flex justify-start items-center mt-2">
                            <input
                                type="radio"
                                id="radio4"
                                value="4"
                                className="h-3 w-3 checked:bg-mainPink bg-gray-300 border-none"
                            />
                            <label
                                htmlFor="radio4"
                                className="zen-kaku-regular text-sm ml-1 tracking-wide">
                                その他のお問合せについて
                            </label>
                        </div>
                    </div>
                    <div className="contact-content-user-detail mt-5">
                        <div className="username-filed text-sm noto-sans-jp font-normal">
                            <div>
                                <label
                                    htmlFor="username"
                                    className="zen-kaku-regular text-sm ml-1 tracking-wide">
                                    <span className="text-mainPink mr-2">
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </span>
                                    お名前
                                    <span className="text-mainPink ml-1">
                                        ※
                                    </span>
                                </label>
                            </div>
                            <input
                                type="text"
                                id="username"
                                value=""
                                className="w-full h-7 border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
                                placeholder="例）山田　花子"
                            />
                        </div>
                        <div className="company-name-filed text-sm noto-sans-jp font-normal mt-5">
                            <div>
                                <label
                                    htmlFor="company-name"
                                    className="zen-kaku-regular text-sm ml-1 tracking-wide">
                                    <span className="text-mainPink mr-2">
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </span>
                                    会社名
                                </label>
                            </div>
                            <input
                                type="text"
                                id="company-name"
                                value=""
                                className="w-full h-7 border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
                                placeholder="例）株式会社ACE HOME"
                            />
                        </div>
                        <div className="tel-number-filed text-sm noto-sans-jp font-normal mt-5">
                            <div>
                                <label
                                    htmlFor="tel-number"
                                    className="zen-kaku-regular text-sm ml-1 tracking-wide">
                                    <span className="text-mainPink mr-2">
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </span>
                                    電話番号
                                    <span className="text-mainPink ml-1">
                                        ※
                                    </span>
                                </label>
                            </div>
                            <input
                                type="text"
                                id="tel-number"
                                value=""
                                className="w-full h-7 border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
                                placeholder="例）09012345678"
                            />
                        </div>
                        <div className="email-filed text-sm noto-sans-jp font-normal mt-5">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="zen-kaku-regular text-sm ml-1 tracking-wide">
                                    <span className="text-mainPink mr-2">
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </span>
                                    メールアドレス
                                    <span className="text-mainPink ml-1">
                                        ※
                                    </span>
                                </label>
                            </div>
                            <input
                                type="text"
                                id="email"
                                value=""
                                className="w-full h-7 border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
                                placeholder="例）aaa@aaa.com"
                            />
                        </div>
                        <div className="email-confirm-filed text-sm noto-sans-jp font-normal mt-5">
                            <div>
                                <label
                                    htmlFor="email-confirm"
                                    className="zen-kaku-regular text-sm ml-1 tracking-wide">
                                    <span className="text-mainPink mr-2">
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </span>
                                    メールアドレス
                                    <span className="text-mainPink ml-1">
                                        ※
                                    </span>
                                </label>
                            </div>
                            <input
                                type="text"
                                id="email-confirm"
                                value=""
                                className="w-full h-7 border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
                                placeholder="例）aaa@aaa.com"
                            />
                        </div>
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
                                name="content"
                                id="content"
                                rows={10}
                                className="w-full border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
                                placeholder="1000文字以内でお書きください"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactPage
