import { createContext, useState } from 'react'
import { v4 as randomId } from 'uuid'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart((prevState) => [...prevState, { product, buyId: randomId() }])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
