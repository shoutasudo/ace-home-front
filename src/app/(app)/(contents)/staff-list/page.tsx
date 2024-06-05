import Contents from '@/ _components/Contents'
import StaffCard from '@/ _components/StaffCard'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'スタッフリスト'
}

const StaffListPage = () => {
    return (
        <Contents subTitle={'STAFF LIST'} mainTitle={'スタッフ紹介'}>
            <div className="staff-list-container w-full max-w-4xl flex justify-center mt-3 px-2 md:px-0">
                <div className="w-full grid md:grid-cols-3 md:gap-1 sm:grid-cols-2 sm:gap-2 grid-cols-1 gap-0">
                    <div className="staff-list-container-card w-full flex justify-center mt-3 mb-8">
                        <StaffCard src='/images/518x350.png' jobTitle='代表取締役' name='須藤　正太' />
                    </div>
                    <div className="staff-list-container-card w-full flex justify-center mt-3 mb-8">
                        <StaffCard src='/images/518x350.png' jobTitle='代表取締役' name='須藤　正太' />
                    </div>
                    <div className="staff-list-container-card w-full flex justify-center mt-3 mb-8">
                        <StaffCard src='/images/518x350.png' jobTitle='代表取締役' name='須藤　正太' />
                    </div>
                    <div className="staff-list-container-card w-full flex justify-center mt-3 mb-8">
                        <StaffCard src='/images/518x350.png' jobTitle='代表取締役' name='須藤　正太' />
                    </div>
                    <div className="staff-list-container-card w-full flex justify-center mt-3 mb-8">
                        <StaffCard src='/images/518x350.png' jobTitle='代表取締役' name='須藤　正太' />
                    </div>
                    <div className="staff-container-card w-full flex justify-center mt-3 mb-8">
                        <StaffCard src='/images/518x350.png' jobTitle='代表取締役' name='須藤　正太' />
                    </div>
                </div>
            </div>
        </Contents>
    )
}

export default StaffListPage