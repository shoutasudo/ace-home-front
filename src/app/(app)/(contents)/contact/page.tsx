'use client'
import React from 'react'
import '@/css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import DoubleLineBtn from '@/ _components/DoubleLineBtn'

const ContactPage = () => {

    //TODO: 処理
    const handleSubmit = () => {
        console.log('submit')
    }


    return (
        <div className='w-full md:px-8'>
            <div className="sns-list-card-content-sub-title text-center">
                <h2 className="text-mainPink zen-kaku-black text-md">
                    CONTACT
                </h2>
            </div>
            <div className="sns-list-card-content-main-title text-center">
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
            <form>
                <div className="contact-contents w-full">
                    <div className="contact-content-contact-detail md:px-6 px-0 my-7">
                        <div className="flex justify-start items-center">
                            <input
                                type="radio"
                                name="title"
                                id="radio1"
                                value="1"
                                className="h-3 w-3 mr-3 checked:bg-mainPink bg-gray-300 border-none"
                            />
                            <label
                                htmlFor="radio1"
                                className="zen-kaku-regular text-xs ml-1 tracking-wide">
                                ACE HOMEについて
                            </label>
                        </div>
                        <div className="flex justify-start items-center mt-3">
                            <input
                                type="radio"
                                name="title"
                                id="radio2"
                                value="2"
                                className="h-3 w-3 mr-3 checked:bg-mainPink bg-gray-300 border-none"
                            />
                            <label
                                htmlFor="radio2"
                                className="zen-kaku-regular text-xs ml-1 tracking-wide">
                                物件について
                            </label>
                        </div>
                        <div className="flex justify-start items-center mt-3">
                            <input
                                type="radio"
                                name="title"
                                id="radio3"
                                value="3"
                                className="h-3 w-3 mr-3 checked:bg-mainPink bg-gray-300 border-none"
                            />
                            <label
                                htmlFor="radio3"
                                className="zen-kaku-regular text-xs ml-1 tracking-wide">
                                求人について
                            </label>
                        </div>
                        <div className="flex justify-start items-center mt-3">
                            <input
                                type="radio"
                                name="title"
                                id="radio4"
                                value="4"
                                className="h-3 w-3 mr-3 checked:bg-mainPink bg-gray-300 border-none"
                            />
                            <label
                                htmlFor="radio4"
                                className="zen-kaku-regular text-xs ml-1 tracking-wide">
                                その他のお問合せについて
                            </label>
                        </div>
                    </div>
                    <div className="contact-content-user-detail mt-5 md:px-6 px-0">
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
                                className="w-full h-10 border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
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
                                className="w-full h-10 border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
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
                                className="w-full h-10 border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
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
                                className="w-full h-10 border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
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
                                className="w-full h-10 border-gray-300 mt-3 focus:outline-none text-sm placeholder-gray-400"
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
                    <input type="checkbox" name="considerations-check" id="considerations-check" className="h-5 w-5 border-gray-300 mr-5 checked:bg-mainPink" />
                    <label htmlFor="considerations-check">弊社個人情報保護方針を確認、同意する</label>
                </div>
                <div className="information-container-more-btn mt-6" onClick={() => handleSubmit()}>
                    <DoubleLineBtn content={'確認'} link={'#'} />
                </div>
            </form>
        </div>
    )
}

export default ContactPage
