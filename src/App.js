import React from 'react';
import Header from "./components/Header";
import ProductsContainer from "./components/ProductsContainer";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Header/>
      <ProductsContainer/>        
    </Provider>
  );
}

export default App;
