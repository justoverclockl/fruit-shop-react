import React, { useState } from 'react'
import LoadingIndicator from './LoadingIndicator'
import { useEffect } from 'react'
import TextField from '@mui/material/TextField'
import SingleFruitPopup from './SingleFruitPopup'
import Social from './Social'
import ScrollToTop from './ScrollToTop'
import { v4 as randomId } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import {
    getProducts,
    selectAllProducts,
    loadingState,
    errorState,
    productStatus,
} from '../states/storeSlice'
import { insertInCart } from '../states/cartSlice'

const Products = () => {
    const [popup, setPopup] = useState(false)
    const [popupData, setPopupData] = useState(null)
    const [search, setSearch] = useState('')
    const togglePopup = () => setPopup(!popup)
    const cartSuccess = () => {
        toast.success('Prodotto Aggiunto al carrello!', {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        })
    }

    // sezione redux
    const allFruits = useSelector(selectAllProducts)
    const isLoading = useSelector(loadingState)
    const fruitStatus = useSelector(productStatus)
    const error = useSelector(errorState)
    const dispatch = useDispatch()

    useEffect(() => {
        if (fruitStatus !== 'succeeded') {
            dispatch(getProducts())
        }
    }, [fruitStatus, dispatch])

    return (
        <div className="max-w-[1100px] mx-auto py-8 w-full my-20 min-h-[750px]">
            <Toaster position="bottom-right" reverseOrder={false} />
            <div id="search" className="mb-16 w-full flex items-center">
                <TextField
                    onChange={(event) => setSearch(event.target.value)}
                    id="filled-basic"
                    label="Cerca il tuo frutto"
                    color="success"
                    variant="filled"
                    fullWidth
                />
            </div>
            <div className="relative grid mx-auto justify-center items-center w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {error !== '' ? (
                    <h1 className="font-bold text-xl">{error}</h1>
                ) : null}

                {isLoading ? <LoadingIndicator /> : false}
                {allFruits.fruits
                    .filter((fruit) => {
                        if (search === '') {
                            return fruit
                        } else if (
                            fruit.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        ) {
                            return fruit
                        }
                    })
                    .map((fruit) => (
                        <div
                            key={fruit.id}
                            className="flex flex-col mx-auto justify-center items-center w-[250px]"
                        >
                            <div id="productName">
                                <h1 className="font-bold text-2xl">
                                    {fruit.name}
                                </h1>
                            </div>
                            <div
                                style={{
                                    backgroundImage: 'url(' + fruit.image + ')',
                                }}
                                className="w-full h-[150px] bg-contain bg-center bg-no-repeat hover:scale-110 duration-500 my-4 overflow-hidden"
                            ></div>
                            <div>
                                <div className="flex flex-wrap items-center text-sm justify-center">
                                    <div className="bg-zinc-200 text-black p-[.2rem] rounded-md mr-2 mb-2">
                                        Carboidrati:{' '}
                                        {fruit.nutritions.carbohydrates}
                                    </div>
                                    <div className="bg-zinc-200 text-black p-[.2rem] rounded-md mr-2 mb-2">
                                        Proteine: {fruit.nutritions.protein}
                                    </div>
                                    <div className="bg-zinc-200 text-black p-[.2rem] rounded-md mr-2 mb-2">
                                        Grassi: {fruit.nutritions.fat}%
                                    </div>
                                </div>
                                <p className="py-4 text-center">
                                    <span id="price" className="font-bold">
                                        Prezzo: {fruit.price}€
                                    </span>
                                </p>
                                <div className="text-center">
                                    <button
                                        onClick={() => [
                                            cartSuccess(),
                                            dispatch(
                                                insertInCart({
                                                    ...fruit,
                                                    buyId: randomId(),
                                                })
                                            ),
                                        ]}
                                        className="p-2 bg-green-700 hover:bg-green-500 ml-4 rounded-lg text-white"
                                    >
                                        Acquista
                                    </button>
                                    <button
                                        onClick={() => {
                                            setPopupData(fruit)
                                            togglePopup()
                                        }}
                                        className="p-2 bg-orange-400 hover:bg-orange-600 ml-4 rounded-lg text-white"
                                    >
                                        Dettagli
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                {popup && (
                    <SingleFruitPopup state={setPopup} fruit={popupData} />
                )}
            </div>
            <ScrollToTop />
            <Social />
        </div>
    )
}

export default Products
