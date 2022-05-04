import React from 'react'
import { Link } from 'react-router-dom'
import MainLogo from '../assets/logo-main.png'

const Home = () => {
    return (
        <div className="grid overflow-hidden md:grid-cols-2  gap-4 w-screen h-screen items-center relative">
            <div className="bg-watermelon h-full w-full bg-cover bg-center"></div>
            <div className=""></div>
            <div className=""></div>
            <div className="bg-ananas h-full w-full bg-cover bg-center"></div>
            <div className="absolute inset-x-0 shadow-xl bg-white w-[200px] h-[200px] flex flex-col justify-center items-center mx-auto -mt-1 rounded-lg">
                <img src={MainLogo} alt="main logo" />
                <Link to="/shop">
                    <button className="relative bottom-8 p-1 bg-amber-500 text-white px-4 rounded-2xl cursor-pointer hover:bg-amber-600">
                        Entra
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
