'use client'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
        const getInstagramUser = async () => {
            const res = await fetch('/api/instagram/getUser');
            const data = await res.json();
        }
        getInstagramUser();
    }, []);
    return (
        <div>test</div>
    )
}

export default Page