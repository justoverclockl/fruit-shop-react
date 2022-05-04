import './App.css'
import '@fontsource/lato'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Store from './components/Store'
import ErrorPage from './components/ErrorPage'
import {CartProvider} from "./context/CartContext";

function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/shop" element={<Store/>}/>
                    {/* Ultima Route per le error Page */}
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </Router>
        </CartProvider>
    )
}

export default App
