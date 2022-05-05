import React, {useState, useEffect} from 'react'
import LoadingIndicator from './LoadingIndicator'
import {useContext} from 'react'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import CartContext from '../context/CartContext'

const Products = () => {
    const {addToCart} = useContext(CartContext)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    useEffect(() => {
        getFruitsData()
    }, [])

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
        <div className="max-w-[1100px] mx-auto py-8 w-full my-20 min-h-[750px]">
            <div id="search" className="mb-16 w-full flex items-center">
                <TextField onChange={event => setSearch(event.target.value)} id="filled-basic"
                           label="Cerca il tuo frutto" color="success" variant="filled" fullWidth/>
                <button className="p-4 bg-green-700 ml-2 rounded-lg text-white hover:bg-green-500"><SearchIcon/>
                </button>
            </div>
            <div
                className="grid mx-auto justify-center items-center w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {loading ? <LoadingIndicator/> : false}
                {products.filter((fruit) => {
                    if (search === '') {
                        return fruit
                    } else if (fruit.name.toLowerCase().includes(search.toLowerCase())) {
                        return fruit
                    }
                }).map((fruit) => (
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
                            <p>
                                Carboidrati:{' '}
                                {fruit.nutritions.carbohydrates}, Proteine:{' '}
                                {fruit.nutritions.protein}, Grassi:{' '}
                                {fruit.nutritions.fat}%
                            </p>
                            <p className="py-4">
                                    <span id="price" className="font-bold">
                                        Prezzo: {fruit.price}€
                                    </span>
                                <button
                                    onClick={() => addToCart(fruit)}
                                    className="p-2 bg-green-700 ml-4 rounded-lg text-white"
                                >
                                    Acquista
                                </button>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
