'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import http from '@/lib/axios';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await http.get('/api/user');
                console.log(data)
                setUser(data);
            } catch (error) {
                console.error('Failed to fetch user:', error);
                router.push('/admin/login');
            }
        };

        fetchUser();
    }, []);

    return (
        <div>dashboard</div>
    )
}

export default Dashboard