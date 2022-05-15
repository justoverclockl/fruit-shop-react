import React from 'react'
import LogoNavBar from '../assets/logonavbar.png'

const Footer = () => {
    return (
        <footer className="bg-green-500 max-w flex text-white">
            <div className="container mx-auto text-center">
                <div className="py-8">
                    <h1 className="text-5xl">Arriva l'estate... 🍉</h1>
                    <p className="text-2xl text-hairline py-6">
                        Le energie non devono mai mancare? <br />
                        Acquista ora la migliore frutta al prezzo più
                        conveniente!
                    </p>
                </div>
                <div className="flex justify-start items-start">
                    <ul className="list-reset flex pt-16 pb-16">
                        <li className="mr-8">
                            <a
                                href="#"
                                className="no-underline hover:underline text-white"
                            >
                                <h2 className="text-3xl text-bold">
                                    FruitShop🥝
                                </h2>
                            </a>
                        </li>
                        <li className="mr-8 mt-2">
                            <a
                                className="text-grey-darker no-underline hover:text-white"
                                href="#"
                            >
                                Termini di utilizzo
                            </a>
                        </li>
                        <li className="mr-8 mt-2">
                            <a
                                className="text-grey-darker no-underline hover:text-white"
                                href="#"
                            >
                                Privacy
                            </a>
                        </li>
                    </ul>

                    <ul className="list-reset flex pt-16 pb-16 ml-auto">
                        <li className="mr-8">
                            <a
                                className="text-grey-darker no-underline hover:text-white"
                                href="#"
                            >
                                Instagram
                            </a>
                        </li>
                        <li className="mr-8">
                            <a
                                className="text-grey-darker no-underline hover:text-white"
                                href="#"
                            >
                                Facebook
                            </a>
                        </li>
                        <li className="mr-8">
                            <a
                                className="text-grey-darker no-underline hover:text-white"
                                href="#"
                            >
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
