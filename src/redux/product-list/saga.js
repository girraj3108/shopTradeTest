import { call, fork, put, takeLatest, take } from "redux-saga/effects";
import {GET_FILTERED_PRODUCTS, GET_PRODUCT_LIST} from "./action-type";

import axios from 'axios';
import {getProductListSuccess, getFilteredProductsSuccess} from "./action";
import productList from  "../../productList.json";

function* watchGetProductsListSaga(){
    yield takeLatest(GET_PRODUCT_LIST, getProductList)
}

function* getProductList(action) {
    try {
      const documents = yield call(
        axios.get,
        `https://jsonplaceholder.typicode.com/users`,
      );
      yield put(getProductListSuccess(productList));
    } catch (e) { }
}

function* watchGetFilteredProductsSaga() {
  yield takeLatest(GET_FILTERED_PRODUCTS, getFilteredProducts)
}

function* getFilteredProducts(action) {
  try {
    const documents = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users`,
    );

    const filteredProducts = productList.filter( product => product.tag === action.tag);
    const productsList = filteredProducts.length > 0 ? filteredProducts : productList;
    yield put(getProductListSuccess(productsList));
  } catch (e) { }
}


  
  const productListSaga = [
      fork(watchGetProductsListSaga),
      fork(watchGetFilteredProductsSaga)
  ]

  export default productListSaga;