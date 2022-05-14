import React from 'react'
import { Link } from 'react-router-dom'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import HowToRegIcon from '@mui/icons-material/HowToReg'

const RegisterLoginButtons = () => {
    return (
        <>
            <li>
                <Link to="/login">
                    <button className="bg-orange-400 p-2 rounded-lg hover:bg-orange-600">
                        <AppRegistrationIcon className="mr-2" />
                        Registrati
                    </button>
                </Link>
            </li>
            <li>
                <button className="bg-green-700 p-2 rounded-lg hover:bg-green-600">
                    <HowToRegIcon className="mr-2" />
                    Login
                </button>
            </li>
        </>
    )
}

export default RegisterLoginButtons
