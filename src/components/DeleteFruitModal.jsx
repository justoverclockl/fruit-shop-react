import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

const DeleteFruitModal = ({ data, setPopup }) => {
    return (
        <div className="h-screen w-screen fixed top-1/2 flex items-center left-1/2 backdrop-blur-lg transform -translate-y-1/2 -translate-x-1/2 z-30">
            <div className="fixed z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-100 shadow-xl w-fit min-w-[500px] h-fit p-4 rounded-xl hover:scale-110 duration-1000">
                <div className="w-[500px] h-fit p-4 rounded-lg flex justify-center items-center flex-col relative">
                    <div className="absolute right-2 top-2 text-black cursor-pointer">
                        <CloseIcon onClick={() => setPopup(false)} />
                    </div>
                    <h1 className="font-bold text-3xl mt-8 mb-4 text-red-700 text-center">
                        Cancellare Frutto dal database?
                    </h1>
                    <div className="text-center">
                        Attenzione! L'eliminazione è irreversibile, non sarà
                        possibile ripristinare il prodotto successivamente.
                    </div>
                    <div className="flex items-center justify-around mt-9">
                        <button className="p-3 px-3 text-xs font-semibold text-white uppercase transition-colors duration-200 mr-2 bg-green-600 rounded hover:bg-green-400 focus:bg-orange-600 focus:outline-none">
                            Conferma
                        </button>
                        <button className="p-3 text-xs font-semibold text-white uppercase transition-colors duration-200 mr-2 bg-red-600 rounded hover:bg-red-400 focus:bg-orange-600 focus:outline-none">
                            Annulla
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteFruitModal
