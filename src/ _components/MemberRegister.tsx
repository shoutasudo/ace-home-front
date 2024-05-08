import React from 'react'
import Image from 'next/image'

const MemberRegister = () => {
    return (
        <div className="flex justify-center flex-col">
            <div className="flex justify-center items-center flex-col px-0">
                <div className="member-register-container w-full bg-mainPink my-10 max-w-4xl">
                    <div className="member-register-container-title py-2 text-center tracking-widest">
                        <h3 className="text-white noto-sans-jp font-medium">
                            会員登録はこちら
                        </h3>
                    </div>
                    <div className="member-register-container-card bg-white rounded-lg mx-4 py-3 mb-3 flex justify-center items-center flex-col">
                        <div className="member-register-container-card-description text-mainPink noto-sans-jp font-semibold flex justify-center items-center flex-col">
                            <p>まずは公式LINEアカウント</p>
                            <p>「ACE HOME」を友達に追加！</p>
                        </div>
                        <div className="line-register-btn flex justify-center items-center flex-col mt-3">
                            <Image
                                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                                alt="お友達追加"
                                width={116}
                                height={36}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberRegister
