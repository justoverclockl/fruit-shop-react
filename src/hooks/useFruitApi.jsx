import {useEffect, useState} from "react";

export const useFruitApi = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                const data = await fetch(
                    'https://fruits-develhope.herokuapp.com/api', {
                        cache: 'force-cache'
                    }
                )
                if (data.ok) {
                    const result = await data.json()
                    setProducts(() => result.fruits)
                    setLoading(false)
                    return result
                }
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    return [products, loading]
}