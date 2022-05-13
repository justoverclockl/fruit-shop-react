import React, { useState, useContext } from 'react'
import Badge from '@mui/material/Badge'
import LogoNavBar from '../assets/logonavbar.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

const Navbar = () => {
    const { cart } = useContext(CartContext)
    const [openCart, setOpenCart] = useState(false)

    const changePopupState = () => {
        setOpenCart(!openCart)
    }

    return (
        <div className="flex justify-between items-center px-8 py-8 bg-green-500 text-white">
            <div className="flex flex-row items-center">
                <Link to="/">
                    <img
                        className="w-[50px]"
                        src={LogoNavBar}
                        alt="logo navbar"
                    />
                </Link>
                <h1 className="px-4 font-bold text-lg text-white">
                    Fruit Store Ecommerce
                </h1>
            </div>
            <div>
                <ul className="flex flex-wrap flex-row items-center">
                    <li>
                        <Badge
                            className="cursor-pointer"
                            badgeContent={cart.length}
                            color="success"
                        >
                            <div className="mr-4">
                                {cart.length <= 0
                                    ? 'Il tuo carrello è vuoto'
                                    : cart.length === 1
                                    ? `Il tuo carrello contiene ${cart.length} prodotto`
                                    : cart.length > 1
                                    ? `Il tuo carrello contiene ${cart.length} prodotti`
                                    : null}
                            </div>
                            <ShoppingCartIcon onClick={changePopupState} />
                            {openCart && <Cart />}
                        </Badge>
                    </li>
                    <li>
                        <button className="bg-orange-400 p-2 rounded-lg hover:bg-orange-600">
                            <AppRegistrationIcon className="mr-2" />
                            Registrati
                        </button>
                    </li>
                    <li>
                        <button className="bg-green-700 p-2 rounded-lg hover:bg-green-600">
                            <HowToRegIcon className="mr-2" />
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
