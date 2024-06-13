'use client'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
        const getInstagramUser = async () => {
            // const res = await fetch('/api/instagram/getUser');
            const res = await fetch('https://ace-home-api.com/api/test')
            const data = await res.json();
            console.log(data);
        }
        getInstagramUser();
    }, []);
    return (
        <div>test</div>
    )
}

export default Page