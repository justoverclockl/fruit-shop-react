import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

const Social = () => {
    return (
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-600 rounded-r-xl m-2">
                    <a
                        className="flex justify-between items-center w-full text-white"
                        href="#"
                    >
                        Facebook <FacebookIcon fontSize={'large'} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-300 rounded-r-xl m-2">
                    <a
                        className="flex justify-between items-center w-full text-white"
                        href="#"
                    >
                        Twitter <TwitterIcon fontSize={'large'} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-green-500 rounded-r-xl m-2">
                    <a
                        className="flex justify-between items-center w-full text-white"
                        href="#"
                    >
                        Email <AlternateEmailIcon fontSize={'large'} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Social
