import React, { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import { v4 as randomId } from 'uuid'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import PointOfSaleSharpIcon from '@mui/icons-material/PointOfSaleSharp'

const Cart = () => {
    const { cart } = useContext(CartContext)

    const productsTotal = Array.from(cart)
        .map((item) =>
            parseFloat(item.product.price.replace(/,/g, '.')).toFixed(2)
        )
        .reduce((acc, curr) => acc + Number(curr), 0)
        .toFixed(2)

    return (
        <div className="absolute z-10 right-[0px] top-[90px] bg-zinc-100 shadow-xl w-fit min-w-[500px] h-fit p-4 rounded-xl">
            <div>
                <h1 className="text-gray-600 font-bold text-2xl text-center mb-12">
                    Il tuo Carrello
                </h1>
            </div>
            <div className="mx-4 mt-4 mb-4 text-gray-700 flex items-center justify-between">
                <div className="min-w-[150px]">Articolo</div>
                <div>Quantità</div>
                <div>Prezzo</div>
                <div>Rimuovi</div>
            </div>
            {cart.map((product) => {
                return (
                    <div
                        id={randomId()}
                        key={randomId()}
                        className="mx-4 text-gray-700 flex items-center justify-between"
                    >
                        <div className="flex flex-row items-center flex-wrap min-w-[150px]">
                            <img
                                className="rounded-[100%] w-[50px] mr-2"
                                src={product.product.image}
                                alt={product.product.name}
                            />
                            {product.product.name}
                        </div>
                        <div className="flex">
                            <input
                                id="quantity"
                                className="w-[50px]"
                                type="number"
                                defaultValue={1}
                            />
                        </div>
                        <div className="font-bold min-w-[45px] text-right">
                            {product.product.price}€
                        </div>
                        <button>
                            <DeleteForeverIcon />
                        </button>
                    </div>
                )
            })}
            <div className="mx-4 mt-8 font-bold text-gray-700 flex flex-col items-center justify-between">
                <div className="bg-green-700 w-full text-white text-center p-2 rounded-lg">
                    Totale: {productsTotal} €
                </div>
                <button className="bg-amber-500 hover:bg-amber-600 p-3 mt-4 w-full text-white rounded-lg">
                    <PointOfSaleSharpIcon /> Paga Ora
                </button>
            </div>
        </div>
    )
}

export default Cart
