import React from 'react'
import '@/css/contents.css'
import MemberRegister from '@/ _components/MemberRegister'

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="lg:mt-32 mt-12">
            <div className="contents-container w-full flex justify-center items-center flex-col px-4 py-7">
                <div className="contents-container-card flex justify-center flex-col items-center bg-white md:p-5 p-2 max-w-4xl w-full">
                    <div className="card-content flex justify-center items-center flex-col py-8 px-4 w-full">
                        {children}
                    </div>
                </div>
            </div>
            <section className="member-register w-full px-5">
                <MemberRegister />
            </section>
        </div>
    )
}

export default ContentLayout
