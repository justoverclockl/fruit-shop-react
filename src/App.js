import './App.css'
import '@fontsource/lato'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Store from './components/Store'
import ErrorPage from './components/ErrorPage'
import { CartProvider } from './context/CartContext'
import ReduxTest from "./components/ReduxTest";

function App() {
    const [pageTitle, setPageTitle] = useState(
        'Fruit Store - la migliore frutta a casa tua'
    )

    useEffect(() => {
        document.title = pageTitle
    }, [pageTitle])

    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home props={setPageTitle} />}
                    />
                    <Route
                        path="/shop"
                        element={<Store props={setPageTitle} />}
                    />
                    <Route
                        path="/redux"
                        element={<ReduxTest />}
                    />
                    {/* Ultima Route per le error Page */}
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </CartProvider>
    )
}

export default App
