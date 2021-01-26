import React from "react";
import "./productCard.css"
class ProductCard extends React.Component{

    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          isHovering: false,
          productId: 0,
          showAddCartButtonState: false,
          showProductName: true
        };
    }

    handleMouseHover(id) {
        this.setState({
            productId: id,
            isHovering: !this.state.isHovering,
            showProductName: !this.state.showProductName
        })
    }

    handleMouseLeave(id) {
        this.setState({
            productId: id,
            isHovering: !this.state.isHovering,
            showProductName: !this.state.showProductName,
            showAddCartButtonState: false
        })
    }

    showAddCartButtton(){
        this.setState({showAddCartButtonState: true})
    }

    render(){
       const {product, addToCartHandler} = this.props;
    return(
        <div 
        className="product-card"
        onMouseEnter={() => this.handleMouseHover(product.id)}
        onMouseLeave={() => this.handleMouseLeave(product.id)}
        key={product.id}
    >
        <img className="card-img-top" src={product.image_src} alt="Card image cap"></img>

        <div className="card-body">
                {
                    (this.state.showProductName) &&
                    <>
                    <h5 className="card-title">{product.vendor}</h5>
                    <p className="card-text product-name">
                        {product.name.length > 30 ? `${product.name.slice(0,30).toUpperCase()}...` : product.name.toUpperCase()}
                    </p>
                </>
                }
            {
                (this.state.showAddCartButtonState && product.id === this.state.productId) &&
                <button type="button" className="btn btn-light add-to-cart-button" onClick={() => addToCartHandler(product)}>ADD TO CART</button>
            }

            {
                (this.state.isHovering && product.id === this.state.productId) && 
                <>
                <span className="product-size">Sizes:</span>
                {product.options?.map( option => <span className="product-size" onClick={() =>this.showAddCartButtton()}>{option.value}</span>)}
                </>
            }

            <p className="card-text product-price">
                <span>${product.price/2}</span>
                <span className="original-price">${product.price}</span>
                <span className="discount-percent">(50% OFF)</span>
            </p>
        </div>
    </div>

        )
    }
}

export default ProductCard;