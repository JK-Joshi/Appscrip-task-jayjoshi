import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Products {
    id: number;
    title: string;
    description: string;
    image: string;
    isOutofStock: boolean;
    isWishListed: boolean;
    category: string
}

interface ProductState {
    products: Products[];
    isLoading: boolean
}

const initialState: ProductState = {
    products: [],
    isLoading: false
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Products[]>) {
            state.products = action?.payload;
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action?.payload;
        }
    }
});

export const { setProducts, setIsLoading } = productSlice.actions;
export default productSlice.reducer;
