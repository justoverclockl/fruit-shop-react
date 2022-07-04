import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'

const EditFruitModal = ({ data, setPopup }) => {
    const [formState, setFormState] = useState({
        genus: '',
        name: '',
        image: '',
        price: null,
        family: '',
        order: '',
        carbohydrates: null,
        protein: null,
        fat: null,
        sugar: null,
    })

    return (
        <div className="h-screen w-screen fixed top-1/2 flex items-center left-1/2 backdrop-blur-lg transform -translate-y-1/2 -translate-x-1/2 z-30">
            <div className="fixed z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-100 shadow-xl w-fit min-w-[500px] h-fit p-4 rounded-xl hover:scale-110 duration-1000">
                <div className="text-right text-black cursor-pointer">
                    <CloseIcon onClick={() => setPopup(false)} />
                </div>
                <h1 className="font-bold text-4xl mb-4 text-green-900 text-center">
                    Modifica Frutto
                </h1>
                <div className="w-[500px] h-fit p-4 rounded-lg flex justify-center items-center flex-col">
                    <form>
                        <Box
                            sx={{
                                '& .MuiTextField-root': {
                                    m: 1,
                                    width: '35ch',
                                },
                            }}
                            autoComplete="off"
                        >
                            <div className="flex">
                                <TextField
                                    name="genus"
                                    label="Genus"
                                    variant="filled"
                                    color="success"
                                    style={{ width: '100%' }}
                                    defaultValue={data.genus}
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            genus: e.target.value,
                                        })
                                    }
                                />
                                <TextField
                                    name="name"
                                    label="Nome"
                                    variant="filled"
                                    color="success"
                                    type="text"
                                    style={{ width: '100%' }}
                                    defaultValue={data.name}
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex">
                                <TextField
                                    name="image"
                                    label="Image"
                                    variant="filled"
                                    color="success"
                                    type="text"
                                    style={{ width: '100%' }}
                                    defaultValue={data.image}
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            image: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex">
                                <TextField
                                    name="price"
                                    label="Prezzo"
                                    variant="filled"
                                    color="success"
                                    type="number"
                                    style={{ width: '100%' }}
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            price: e.target.value,
                                        })
                                    }
                                />
                                <TextField
                                    name="family"
                                    label="Famiglia"
                                    variant="filled"
                                    color="success"
                                    type="text"
                                    style={{ width: '100%' }}
                                    defaultValue={data.family}
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            family: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex">
                                <TextField
                                    name="order"
                                    label="Ordine"
                                    variant="filled"
                                    color="success"
                                    type="text"
                                    style={{ width: '100%' }}
                                    defaultValue={data.order}
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            order: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex">
                                <TextField
                                    name="carbohydrates"
                                    label="Carboidrati"
                                    variant="filled"
                                    color="success"
                                    type="number"
                                    style={{ width: '100%' }}
                                    defaultValue={data.nutritions.carbohydrates}
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            carbohydrates: e.target.value,
                                        })
                                    }
                                />
                                <TextField
                                    name="protein"
                                    label="Proteine"
                                    variant="filled"
                                    color="success"
                                    type="number"
                                    style={{ width: '100%' }}
                                    defaultValue={data.nutritions.protein}
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            protein: e.target.value,
                                        })
                                    }
                                />
                                <TextField
                                    name="fat"
                                    label="Grassi"
                                    variant="filled"
                                    color="success"
                                    type="number"
                                    style={{ width: '100%' }}
                                    defaultValue={data.nutritions.fat}
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            fat: e.target.value,
                                        })
                                    }
                                />
                                <TextField
                                    name="sugar"
                                    label="Zuccheri"
                                    variant="filled"
                                    color="success"
                                    type="number"
                                    style={{ width: '100%' }}
                                    defaultValue={data.nutritions.sugar}
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            sugar: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </Box>
                        <div className="mt-4 flex justify-center">
                            <button
                                type="submit"
                                className="p-2 text-lg bg-orange-400 text-white rounded-md mr-2"
                            >
                                Modifica Frutto
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditFruitModal
