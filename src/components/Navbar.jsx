import React, { useState, useContext } from 'react'
import Badge from '@mui/material/Badge'
import LogoNavBar from '../assets/logonavbar.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'

const Navbar = () => {
    const { cart } = useContext(CartContext)
    const [openCart, setOpenCart] = useState(false)
    const openCartDialog = () => setOpenCart(!openCart)

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
                <ul>
                    <li>
                        <Badge
                            className="cursor-pointer"
                            badgeContent={cart.length}
                            color="success"
                        >
                            <div className="mr-4">
                                {cart.length <= 0
                                    ? 'Il tuo carrello è vuoto'
                                    : `Il tuo carrello contiene ${cart.length} prodotto/i`}
                            </div>
                            <ShoppingCartIcon onClick={openCartDialog} />
                            {openCart && <Cart />}
                        </Badge>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
