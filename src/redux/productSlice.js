import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
};

export const getProducts = createAsyncThunk('getproducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    return data;
});


export const getDetailProduct = createAsyncThunk('getproducts', async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();

    return data;
});


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.productStatus = STATUS.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                (state.productStatus = STATUS.SUCCESS),
                    (state.products = action.payload);
            })
            .addCase(getProducts.rejected, (state) => {
                state.productStatus = STATUS.FAIL;
            })
            .addCase(getDetailProduct.pending, (state) => {
                state.productDetailStatus = STATUS.LOADING;
            })
            .addCase(getDetailProduct.fulfilled, (state, action) => {
                (state.productDetailStatus = STATUS.SUCCESS),
                    (state.productDetail = action.payload);
            })
            .addCase(getDetailProduct.rejected, (state) => {
                state.productDetailStatus = STATUS.FAIL;
            })
        // .addCase(getCategoryProducts.pending, (state) => {
        //     state.productsStatus = STATUS.LOADING;
        // })
        // .addCase(getCategoryProducts.fulfilled, (state, action) => {
        //     (state.productsStatus = STATUS.SUCCESS),
        //         (state.products = action.payload);
        // })
        // .addCase(getCategoryProducts.rejected, (state) => {
        //     state.productsStatus = STATUS.FAIL;
        // });
    },
});

export default productSlice.reducer;
