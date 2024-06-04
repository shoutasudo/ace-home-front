'use client'
import PrivacyContent from '@/ _components/PrivacyContent'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'プライバシポリシー'
}

const PrivacyPolicyPage = () => {
    return (
        <div className='privacy-policy w-full noto-sans-jp'>
            <div className='privacy-policy-header'>
                <div className='privacy-policy-header-main-title w-full'>
                    <h1 className='text-4xl font-medium text-fontMainBrown'>
                        個人情報の取り扱いについて
                    </h1>
                </div>
                <div className='privacy-policy-header-sub-title mt-1 w-full'>
                    <p className='text-xs noto-sans-jp text-mainPink'>
                        PRIVACY POLICY
                    </p>
                </div>
            </div>
            <div className='privacy-policy-content mt-10'>
                <div className='privacy-policy-header-content'>
                    <PrivacyContent title={'個人情報保護方針'}>
                        株式会社ACE HOME（以下、「当社」という。）は、お客様への快適な住空間等のご提供に奉仕する当社業務の性質に基づき、お客様からお預かりした個人情報を適切に取扱い、保護することが当社の活動方針の根幹であり、当社の社会的責務であると考えております。この思想に基づき本方針を定め、これを実行することを宣言し、関係従業員への周知徹底を図っていきます。
                    </PrivacyContent>
                </div>
                <div className='privacy-policy-contents mt-7'>
                    <div className='privacy-policy-contents-content'>
                        <PrivacyContent title={'1.個人情報の保護'}>
                            個人情報の保護に関する日本の法令その他、規範を遵守しその実行のために個人情報管理責任者を筆頭に社内の管理体制を確立し、実施し、維持し、継続的に改善していきます。
                        </PrivacyContent>
                    </div>
                    <div className='privacy-policy-contents-content mt-7'>
                        <PrivacyContent title={'2.情報収集・使用'}>
                            個人情報を収集する場合は収集する目的を出来る限り明確化し、且つ適法な手段に基づいて収集致します。その使用に当たっては正当な利用目的の範囲内でのみ使用致します。
                        </PrivacyContent>
                    </div>
                    <div className='privacy-policy-contents-content mt-7'>
                        <PrivacyContent title={'3.安全対策'}>
                            当社では、お預かりしている個人情報への不当なアクセス、個人情報の紛失、漏洩、破壊などの予防のため組織的・人的・物理的および技術的に最善の安全対策に努めていきます。
                        </PrivacyContent>
                    </div>
                    <div className='privacy-policy-contents-content mt-7'>
                        <PrivacyContent title={'4.情報提供'}>
                            ご本人からご提供頂いた個人情報は正当な理由のある場合を除き、ご本人の同意なく第三者に提供および開示致しません。また、当社が個人情報に関する業務を外部に委託する場合は、契約等によって当社と同様の適切な管理を義務づけた上で必要かつ適切な監督を行います。
                        </PrivacyContent>
                    </div>
                    <div className='privacy-policy-contents-content mt-7'>
                        <PrivacyContent title={'5.個人情報の開示・訂正・削除'}>
                            当社は、ご本人が自己の個人情報について開示、訂正、利用停止等の要求がある場合には、ご本人と確認できた場合に限り社会通念や慣行を考慮するとともに利用状況を確認したうえで合理的な範囲でこれに対応致します。
                        </PrivacyContent>
                    </div>
                </div>
            </div>
            <div className='privacy-policy-sign mt-7 text-xs font-light w-full flex justify-end'>
                <div>
                    <p>株式会社ACE HOME</p>
                    <p className='mt-2'>代表取締役社長　testestest</p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicyPage