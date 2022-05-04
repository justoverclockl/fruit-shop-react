import React from 'react'

const Cart = () => {
    return (
        <div className="absolute right-[0px] top-[90px] bg-zinc-200 w-[500px] h-[500px] p-4 rounded-xl">
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
            <div className="mx-4 text-gray-700 flex items-center justify-between">
                <div>Frutta 1</div>
                <div>5</div>
                <div className="font-bold">15€</div>
            </div>
        </div>
    )
}

export default Cart
