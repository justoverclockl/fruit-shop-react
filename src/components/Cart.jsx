import React, { useState } from 'react'
import { useRef } from 'react'
import { v4 as randomId } from 'uuid'
import CloseIcon from '@mui/icons-material/Close'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import PointOfSaleSharpIcon from '@mui/icons-material/PointOfSaleSharp'
import toast, { Toaster } from 'react-hot-toast'
import {
    productsInCart,
    totalPrice,
    cartTotalItems,
    removeFromCart,
} from '../states/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Cart = ({ setPopup }) => {
    const dispatch = useDispatch()
    const insideCart = useSelector(productsInCart)
    const getTotalPrice = useSelector(totalPrice)
    const totalItemsInCart = useSelector(cartTotalItems)
    const popupDiv = useRef(null)

    const removedFromCart = () => {
        toast.success('Prodotto rimosso dal carrello!', {
            style: {
                borderRadius: '10px',
                background: '#911515',
                color: '#fff',
            },
        })
    }

    return (
        <div
            className="absolute z-10 right-[0px] top-[90px] bg-zinc-100 shadow-xl w-fit min-w-[500px] h-fit p-4 rounded-xl"
            ref={popupDiv}
        >
            <Toaster position="bottom-right" reverseOrder={false} />
            <div>
                <div className="text-right text-black">
                    <CloseIcon onClick={() => setPopup(false)} />
                </div>
                <h1 className="text-gray-600 font-bold text-2xl text-center mb-12">
                    {totalItemsInCart <= 0
                        ? 'Il tuo carrello è vuoto'
                        : 'Prodotti nel Carrello'}
                </h1>
            </div>
            <div className="mx-4 mt-4 mb-4 text-gray-700 flex items-center justify-between">
                <div className="min-w-[150px]">Articolo</div>
                <div>Quantità</div>
                <div>Prezzo</div>
                <div>Rimuovi</div>
            </div>
            {insideCart.map((product) => {
                return (
                    <div
                        data-code={product.buyId}
                        key={randomId()}
                        className="mx-4 text-gray-700 flex items-center justify-between"
                    >
                        <div className="flex flex-row items-center flex-wrap min-w-[150px]">
                            <img
                                className="rounded-[100%] w-[50px] mr-2"
                                src={product.image}
                                alt={product.name}
                            />
                            {product.name}
                        </div>
                        <div className="flex">{product.quantity}</div>
                        <div className="font-bold min-w-[45px] text-right">
                            {product.price}€
                        </div>
                        <button
                            onClick={() => [
                                removedFromCart(),
                                dispatch(removeFromCart(product)),
                            ]}
                        >
                            <DeleteForeverIcon />
                        </button>
                    </div>
                )
            })}
            <div className="mx-4 mt-8 font-bold text-gray-700 flex flex-col items-center justify-between">
                <div className="bg-green-700 w-full text-white text-center p-2 rounded-lg">
                    Totale: {getTotalPrice} €
                </div>
                <button className="bg-amber-500 hover:bg-amber-600 p-3 mt-4 w-full text-white rounded-lg">
                    <PointOfSaleSharpIcon /> Paga Ora
                </button>
            </div>
        </div>
    )
}

export default Cart
