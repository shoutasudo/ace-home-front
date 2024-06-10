'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import DoubleLineBtn from '@/ _components/DoubleLineBtn'
import ContactRadioBtn from './ContactRadioBtn'
import ContactInputForm from './ContactInputForm'

const RadioContent = [
    { "id": "1", "content": "ACE HOMEについて" },
    { "id": "2", "content": "物件について" },
    { "id": "3", "content": "リフォームについて" },
    { "id": "4", "content": "売買について" },
    { "id": "5", "content": "求人について" },
    { "id": "6", "content": "その他のお問合せについて" },
];

const InputField = [
    {
        "id": "username",
        "requiredMark": true,
        "placeholder": "例）山田　花子",
        "children": "お名前",
    },
    {
        "id": "company-name",
        "requiredMark": false,
        "placeholder": "例）株式会社ACE HOME",
        "children": "会社名",
    },
    {
        "id": "tel-number",
        "requiredMark": true,
        "placeholder": "例）09012345678",
        "children": "電話番号",
    },
    {
        "id": "email",
        "requiredMark": true,
        "placeholder": "aaa@aaa.com",
        "children": "メールアドレス",
    },
]

const ContactForm = () => {
    //TODO: 処理
    const handleSubmit = () => {
        console.log('submit')
    }
    return (
        <form>
            <div className="contact-contents w-full">
                <div className="contact-content-contact-detail md:px-6 px-0 my-7">
                    {RadioContent.map((item) => (
                        <div className="flex justify-start items-center mt-3" key={item.id}>
                            <ContactRadioBtn id={`radio${item.id}`} value={item.id}>
                                {item.content}
                            </ContactRadioBtn>
                        </div>
                    ))}
                </div>
                <div className="contact-content-user-detail mt-5 md:px-6 px-0">
                    {InputField.map((item) => (
                        <div className="text-sm noto-sans-jp font-normal mb-3" key={item.id}>
                            <ContactInputForm id={item.id} requiredMark={item.requiredMark} placeholder={item.placeholder}>
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
    )
}

export default ContactForm