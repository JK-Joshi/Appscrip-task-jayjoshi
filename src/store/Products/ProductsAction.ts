import axios from "axios"
import { setProducts } from "./ProductsReducer"
import { AppDispatch } from ".."

export const getProducts = async (dispatch: AppDispatch) => {
    try {
        const res = await axios('https://fakestoreapi.com/products')
        if (res?.status === 200) {
            dispatch(setProducts(res?.data))
        }
    } catch (err) {
        console.error(err)
    }
}