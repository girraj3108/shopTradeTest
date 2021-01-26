// import loadingReducer from "./loadingReducer";
import productListReducer from "../redux/product-list/reducer"
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    productList: productListReducer,
    // isLoading: loadingReducer,
})

export default rootReducer;