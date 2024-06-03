'use client'

import axios from 'axios';
import React, { useState } from 'react';
import http from '@/lib/axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        const res = await http.get('/sanctum/csrf-cookie');
        console.log(res);

        const loginResponse = await http.post('/api/login', data);
        console.log(loginResponse);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>送信</button>
            </form>
        </div>
    )
}

export default Login