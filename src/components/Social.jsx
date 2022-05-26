import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Social = () => {
    return (
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-600 rounded-r-xl m-2">
                    <a
                        className="flex justify-between items-center w-full text-white"
                        href="https://www.facebook.com/marcothesituation.colia"
                    >
                        Facebook <FacebookIcon fontSize={'large'} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#0A66C2] rounded-r-xl m-2">
                    <a
                        className="flex justify-between items-center w-full text-white"
                        href="https://www.linkedin.com/in/marco-colia-a1a35915a/"
                    >
                        Linkedin <LinkedInIcon fontSize={'large'} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Social
