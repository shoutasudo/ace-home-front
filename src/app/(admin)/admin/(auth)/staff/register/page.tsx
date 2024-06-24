'use client'

import PageTitle from '@/ _components/Admin/Staff/atoms/PageTitle';
import RegisterForm from '@/ _components/Admin/Staff/templates/RegisterForm';
import React from 'react';

const StaffRegister: React.FC = () => {
    return (
        <section className="w-full mx-[100px] p-6 bg-white rounded-lg shadow-lg my-8">
            <PageTitle>
                スタッフ新規登録
            </PageTitle>
            <RegisterForm />
        </section>
    );
}

export default StaffRegister;
