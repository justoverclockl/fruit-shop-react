import React from 'react'
import {useContext} from "react";
import CartContext from "../context/CartContext";
import { v4 as uuidv4 } from 'uuid';
import PointOfSaleSharpIcon from '@mui/icons-material/PointOfSaleSharp';

const Cart = () => {

    const {cart} = useContext(CartContext)
    const productsTotal = Array
        .from(cart)
        .map(item => parseFloat(item.product.price.replace(/,/g, '.')).toFixed(2))
        .reduce((acc, curr) => acc + Number(curr),0).toFixed(2)

    return (
        <div className="absolute z-10 right-[0px] top-[90px] bg-zinc-100 shadow-xl w-[500px] h-fit p-4 rounded-xl">
            <div>
                <h1 className="text-gray-600 font-bold text-2xl text-center">
                    Carrello
                </h1>
            </div>
            <div className="mx-4 mt-4 mb-4 text-gray-700 flex items-center justify-between">
                <div>Articolo</div>
                <div>Quantità</div>
                <div>Prezzo</div>
            </div>
            {cart.map((product) => {

                return (
                    <div key={uuidv4()} className="mx-4 text-gray-700 flex items-center justify-between">
                        <div>{product.product.name}</div>
                        <div className="text-right">1</div>
                        <div className="font-bold">{product.product.price}€</div>
                    </div>
                )
            })}
            <div className="mx-4 mt-8 font-bold text-gray-700 flex flex-col items-center justify-between">
                <div className="bg-green-700 w-full text-white text-center p-2 rounded-lg">Totale: {productsTotal} €</div>
                <button className="bg-amber-500 hover:bg-amber-600 p-3 mt-4 w-full text-white rounded-lg">
                    <PointOfSaleSharpIcon/> Paga Ora
                </button>
            </div>
        </div>
    )
}

export default Cart
