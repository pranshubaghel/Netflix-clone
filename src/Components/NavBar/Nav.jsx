import React from 'react'
import { useEffect, useState } from "react";
function Nav() {
    const [accessToken, setAccessToken] = useState("")
    const handleLogin = () => {
        const CLIENT_ID = "162506691682-lem8ioa7vth71pen6h55i6921i59oiff.apps.googleusercontent.com"
        const REDIRECT_URI = "http://localhost:3000/inbox"
        const SCOPE = 'https://mail.google.com/'
        const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;
        window.location.href = AUTH_URL;
    };
    const getAccessToken = () => {
        const url = window.location.href
        const token = url.match(/access_token=([^&]+)/)
        localStorage.setItem("Token", token && token[1])
        console.log("Token is", localStorage.getItem("Token"))

    }
    useEffect(() => (
        getAccessToken()
    ), [])
    return (
        <div className='h-[100px] bg-transparent flex  items-center justify-between '>
            <img className='h-[70px] w-[120px] ml-[50px]' src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" />
            <div className='flex gap-2 px-[50px]' >
                <select className='border border-gray-600  '>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
                <button onClick={handleLogin} className='border border-gray-600 rounded bg-red-600 text-white h-[40px] w-[75px]'>Sign In</button>
            </div>

        </div>

    )
};

export default Nav;