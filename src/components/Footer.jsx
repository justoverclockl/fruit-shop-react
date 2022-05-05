import React from 'react'
import LogoNavBar from '../assets/logonavbar.png'

const Footer = () => {
    return (
        <div className="w-full static bottom-0 bg-green-500 h-[300px] flex items-center text-white px-8">
            <div className="w-full">
                <img
                    className="w-[250px]"
                    src={LogoNavBar}
                    alt="fruit shop logo"
                />
            </div>
            <div className="">
                <ul>
                    <li>Contattaci</li>
                    <li>La nostra azienda</li>
                    <li>La nostra Frutta</li>
                    <li>Sede Legale</li>
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Footer
