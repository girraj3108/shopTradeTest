import React from 'react';
import {connect} from "react-redux";
import {getProductList, getFilteredProducts} from "../redux/product-list/action"
import ProductCard from "./ProductCard";
import "./ProductsContainer.css";
import Cart from "./Cart";

const FilterTagsArrays = ["All Products","T-shirt","Denim","shirt","jacket"];

class ProductsContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        }
        this.getFilteredProducts = this.getFilteredProducts.bind(this);
        this.addToCartHandler = this.addToCartHandler.bind(this);
        this.removeFromCartHandler = this.removeFromCartHandler.bind(this);
    }

      componentDidMount(){
        const {getProductsList, productsList} = this.props;
           this.setState({products: productsList});
        getProductsList();
    }

    getFilteredProducts(tag){
        this.props.getFilteredProductsAction(tag)
    }

    /**
     * function to add product from the card
     */
    addToCartHandler = (product) => {
        console.log('hello',product)
        const exist = this.state.cartItems.find( item => item.id === product.id)

        if(exist) {
             this.setState({cartItems: this.state.cartItems.map(item => item.id === product.id ? {...exist, qty: exist.qty + 1} : item )})
        } else{
            this.setState({cartItems: [...this.state.cartItems,{...product, qty : 1}]})
        }
    }

    /**
     * function to remove product from the card
     */
    removeFromCartHandler = (product) => {
        const exist = this.state.cartItems.find( item => item.id === product.id);

        if(exist.qty === 1){
            this.setState({cartItems: this.state.cartItems.filter( items => items.id !== product.id)})
        } else {
            this.setState({cartItems: this.state.cartItems.map(item => item.id === product.id ? {...exist, qty: exist.qty - 1} : item )})
        }
    }
    render(){
          const {productsList} = this.props;
        return(
            <>  
                <div className="person-invitation-message-wrapper">
                    <span>Invite friends to Big Festival and Get Up To $150 MynCash for Every Person Who Visits</span>
                    <button type="button" className="btn btn-light invite-button">invite Now</button>
                </div>

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">Name
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item">Clothing</li>
                        <li className="breadcrumb-item">Mens Clothing</li>
                        <li className="breadcrumb-item active font-weight-bold" aria-current="page">All Mens Clothing</li>
                    </ol>
                </nav>

                <div className="all-products-wrapper">
                    <span className="all-products-title">All Products  </span>
                    <span className="all-products-count">({productsList?.length} Products)</span>
                </div>

                <div className="filter-wrapper">
                    <span>
                        <span className="font-weight-bold">FILTERS:</span>
                        {FilterTagsArrays?.map( tag => 
                            <button type="button" className="btn btn-light button-tag" onClick={() => this.getFilteredProducts(tag)}>{tag}</button>
                        )}
                    </span>

                    <span>

                    </span>
                </div>
                <div className="container-fluid product-list-container">
                <div className="row">
                  <div className="col-md-9 card-wrapper">
                     <div className="row">
                       {
                         productsList.map( product => (
                           <div className="col-md-4">
                               <ProductCard
                                product={product}
                                addToCartHandler={this.addToCartHandler}
                               />
                            </div>
                         ))
                       }
                     </div>
                  </div>
                  <div className="col-md-3">
                       <Cart 
                            cartItems={this.state.cartItems} 
                            addToCartHandler={this.addToCartHandler}
                            removeFromCartHandler={this.removeFromCartHandler}
                        />
                  </div>
                </div>
            </div>
            </>            
        )   
    }
}

const mapStateToProps = (state) => ({
    productsList: state.productList.productList,
})

const mapDispatchToProps = dispatch => ({
    getProductsList: () => dispatch(getProductList()),
    getFilteredProductsAction: (tag) => dispatch(getFilteredProducts(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);


















