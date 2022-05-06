import React from 'react'
import LogoNavBar from '../assets/logonavbar.png'

const Footer = () => {
    return (
        <div className="w-full static bottom-0 bg-green-500 h-fit flex items-center text-white px-8">
            <div className="w-full flex flex-wrap justify-center items-center">
                <img
                    className="w-[250px]"
                    src={LogoNavBar}
                    alt="fruit shop logo"
                />
                <div className="px-8">
                    <ul>
                        <li>Lavora con noi</li>
                        <li>Chi siamo</li>
                        <li>Cosa vogliamo</li>
                        <li>Perchè lo facciamo</li>
                    </ul>
                </div>
                <div className="px-8">
                    <ul>
                        <li>Contattaci</li>
                        <li>La nostra azienda</li>
                        <li>La nostra Frutta</li>
                        <li>Sede Legale</li>
                    </ul>
                </div>
                <div className="px-8 max-w-[350px]">
                    <p>
                        La nostra azienda seleziona solo frutti di altissima qualità e nel rispetto
                        della natura!
                    </p>
                </div>
                <div className="px-8 max-w-[350px]">
                    <p className="mt-2">Develhope Ortofrutta</p>
                    <p className="mt-2">Milano - Via Montenapoleone 5</p>
                    <p className="mt-2">P.iva 00021654987</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
