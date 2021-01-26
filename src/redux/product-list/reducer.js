import{GET_FILTERED_PRODUCTS_SUCCESS, GET_PRODUCT_LIST_SUCCESS} from "./action-type";

const initialState = {
    productList: [],
    filteredProductList: [],
}

const productListReducer = (state = initialState, action) => {
    if(action.type === GET_PRODUCT_LIST_SUCCESS){
        return {
            ...state,
            productList: action.payload
        }
    }
    return state;
}

export default productListReducer;