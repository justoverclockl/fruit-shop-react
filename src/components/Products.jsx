import React, { useState, useEffect } from 'react'
import LoadingIndicator from './LoadingIndicator'

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getFruitsData()
    }, [])

    const addToCart = (id) => {
        const product = document.getElementById(id)
        console.log(product)
    }

    const getFruitsData = async () => {
        setLoading(true)
        try {
            const data = await fetch(
                'https://fruits-develhope.herokuapp.com/api'
            )
            if (data.ok) {
                const result = await data.json()
                setProducts(result.fruits)
                setLoading(false)
                return result
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="max-w-[1100px] mx-auto py-8 w-full">
            <div className="grid mx-auto justify-center items-center w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {loading ? <LoadingIndicator /> : false}
                {products.map((fruit) => {
                    return (
                        <div id={fruit.id}
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
                                <p>
                                    Carboidrati:{' '}
                                    {fruit.nutritions.carbohydrates}, Proteine:{' '}
                                    {fruit.nutritions.protein}, Grassi:{' '}
                                    {fruit.nutritions.fat}%
                                </p>
                                <p className="py-4">
                                    <span id="price" className="font-bold">Prezzo: {fruit.price}</span>
                                    <button className="p-2 bg-green-700 ml-4 rounded-lg text-white">
                                        Acquista
                                    </button>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products
