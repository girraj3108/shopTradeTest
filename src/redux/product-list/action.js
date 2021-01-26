import {GET_FILTERED_PRODUCTS, GET_PRODUCT_LIST, GET_PRODUCT_LIST_SUCCESS} from "./action-type";

export const getProductList = () => ({
    type: GET_PRODUCT_LIST,
})

export const getProductListSuccess =  data => ({
    type: GET_PRODUCT_LIST_SUCCESS,
    payload: data
})

export const getFilteredProducts = (tag) => ({
    type: GET_FILTERED_PRODUCTS,
    tag
})