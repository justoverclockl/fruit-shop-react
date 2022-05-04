import React, { useState } from 'react'
import Badge from '@mui/material/Badge'
import LogoNavBar from '../assets/logonavbar.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Cart from './Cart'

const Navbar = () => {
    const [openCart, setOpenCart] = useState(false)
    const openCartDialog = () => setOpenCart(!openCart)

    return (
        <div className="flex justify-between items-center px-8 py-8 bg-green-500 text-white">
            <div className="flex flex-row items-center">
                <img className="w-[50px]" src={LogoNavBar} alt="logo navbar" />
                <h1 className="px-4 font-bold text-lg text-white">
                    Fruit Store Ecommerce
                </h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Badge
                            className="cursor-pointer"
                            badgeContent={10}
                            color="success"
                        >
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
