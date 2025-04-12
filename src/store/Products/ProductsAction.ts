import axios from "axios"
import { setIsLoading, setProducts } from "./ProductsReducer"
import { AppDispatch } from ".."

export const getProducts = async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true))
    try {
        const res = await axios('https://fakestoreapi.com/products')
        if (res?.status === 200) {
            dispatch(setProducts(res?.data))
        }
        dispatch(setIsLoading(false))
    } catch (err) {
        console.error(err)
    }
}