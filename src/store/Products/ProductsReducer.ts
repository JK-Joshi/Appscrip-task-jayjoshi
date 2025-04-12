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
}

const initialState: ProductState = {
    products: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Products[]>) {
            state.products = action?.payload;
        },
    }
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
