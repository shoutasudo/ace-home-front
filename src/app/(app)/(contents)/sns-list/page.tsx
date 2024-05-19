import React from 'react'
import Image from 'next/image'
import Contents from '@/ _components/Contents'

const SnsListPage = () => {
    return (
        <Contents subTitle={'SNS LIST'} mainTitle={'各種SNS一覧'}>
            <div className="sns-list-card-content-sns-lists w-full mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8">
                <div className="sns-list-card-content-sns-card w-full py-6 px-5 mt-3 bg-white ring-mainPink rounded-lg flex justify-center sm:flex-col items-center ring-4">
                    <div className="w-3/12 sm:w-full">
                        <div className="sns-list-card-content-sns-card-icon flex justify-center items-center">
                            <Image
                                src="/socal-logo/LINE.png"
                                width={66}
                                height={66}
                                alt="icon"
                            />
                        </div>
                        <div className="sns-list-card-content-sns-card-title hidden sm:flex sm: justify-center sm:mt-3">
                            <h3>LINE</h3>
                        </div>
                    </div>
                    <div className="sns-list-card-content-sns-card-description w-9/12 pl-2 sm:w-full sm:pl-0 sm:flex sm:justify-center sm:mt-2">
                        <p className="text-xs tracking-wide noto-sans-jp">
                            おすすめ物件やお得なキャンペーン情報を先行配信いたします！（LINEのお友達登録要）
                        </p>
                    </div>
                </div>
                <div className="sns-list-card-content-sns-card w-full py-6 px-5 mt-3 bg-white ring-mainPink rounded-lg flex justify-center sm:flex-col items-center ring-4">
                    <div className="w-3/12 sm:w-full">
                        <div className="sns-list-card-content-sns-card-icon flex justify-center items-center">
                            <Image
                                src="/socal-logo/TikTok.png"
                                width={66}
                                height={66}
                                alt="icon"
                            />
                        </div>
                        <div className="sns-list-card-content-sns-card-title hidden sm:flex sm: justify-center sm:mt-3">
                            <h3>TikTok</h3>
                        </div>
                    </div>
                    <div className="sns-list-card-content-sns-card-description w-9/12 pl-2 sm:w-full sm:pl-0 sm:flex sm:justify-center sm:mt-2">
                        <p className="text-xs tracking-wide noto-sans-jp">
                            物件の内装やお部屋を動画で公開！お写真で見るより断然わかりやすはず！
                        </p>
                    </div>
                </div>
                <div className="sns-list-card-content-sns-card w-full py-6 px-5 mt-3 bg-white ring-mainPink rounded-lg flex justify-center sm:flex-col items-center ring-4">
                    <div className="w-3/12 sm:w-full">
                        <div className="sns-list-card-content-sns-card-icon flex justify-center items-center">
                            <Image
                                src="/socal-logo/Instagram.png"
                                width={66}
                                height={66}
                                alt="icon"
                            />
                        </div>
                        <div className="sns-list-card-content-sns-card-title hidden sm:flex sm: justify-center sm:mt-3">
                            <h3>Instagram</h3>
                        </div>
                    </div>
                    <div className="sns-list-card-content-sns-card-description w-9/12 pl-2 sm:w-full sm:pl-0 sm:flex sm:justify-center sm:mt-2">
                        <p className="text-xs tracking-wide noto-sans-jp">
                            ACE-HOMEのいろんな特典を先行配信！Instagramだけの特典も・・・
                        </p>
                    </div>
                </div>
                <div className="sns-list-card-content-sns-card w-full py-6 px-5 mt-3 bg-white ring-mainPink rounded-lg flex justify-center sm:flex-col items-center ring-4">
                    <div className="w-3/12 sm:w-full">
                        <div className="sns-list-card-content-sns-card-icon flex justify-center items-center">
                            <Image
                                src="/socal-logo/x.png"
                                width={66}
                                height={66}
                                alt="icon"
                            />
                        </div>
                        <div className="sns-list-card-content-sns-card-title hidden sm:flex sm: justify-center sm:mt-3">
                            <h3>X</h3>
                        </div>
                    </div>
                    <div className="sns-list-card-content-sns-card-description w-9/12 pl-2 sm:w-full sm:pl-0 sm:flex sm:justify-center sm:mt-2">
                        <p className="text-xs tracking-wide noto-sans-jp">
                            常にリアルタイムの情報を！Xを確認しておけば貴女の希望の物件もいち早く見つかるはず！
                        </p>
                    </div>
                </div>
            </div>
        </Contents>
    )
}

export default SnsListPage
