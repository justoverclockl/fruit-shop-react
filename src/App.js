import './App.css'
import '@fontsource/lato'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import ErrorPage from './pages/ErrorPage'
import Register from './components/Register'
import { CartProvider } from './context/CartContext'
import ReduxTest from './components/ReduxTest'

function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/shop" element={<Store />} />
                    <Route path="/redux" element={<ReduxTest />} />
                    <Route path="/login" element={<Register />} />
                    {/* Ultima Route per le error Page */}
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </CartProvider>
    )
}

export default App
