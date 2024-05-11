import Contents from '@/ _components/Contents'
import DoubleLineBtn from '@/ _components/DoubleLineBtn'
import StaffCard from '@/ _components/StaffCard'
import Image from 'next/image'
import React from 'react'

const StaffListPage = () => {
    return (
        <Contents subTitle={'STAFF LIST'} mainTitle={'スタッフ紹介'}>
            <div className="staff-list-container w-full max-w-4xl flex justify-center mt-3 px-2 md:px-0">
                <div className="w-full grid lg:grid-cols-3 lg:gap-0 md:grid-cols-2 md:gap-0 grid-cols-2 gap-3">
                    <div className="staff-list-container-card w-full mt-3 mb-8">
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