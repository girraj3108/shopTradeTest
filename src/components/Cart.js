import React from 'react';
import "./cart.css";

class Cart extends React.Component{
    
    constructor(props) {
        super(props);
    }


    render(){
        const {cartItems, addToCartHandler, removeFromCartHandler} = this.props;

        const itemsPrice = this.props.cartItems.reduce((a,c) => a + c.price * c.qty, 0);
        const shippingPrice = itemsPrice > 1000 ? 0 : 100;
        const totalPrice = itemsPrice + shippingPrice
        return(
            <div className="cart-wrapper">
                <h2>Cart Items</h2>
                {cartItems?.length === 0 ? <div>Cart is Empty</div> :
                
                    <>
                     {
                            cartItems.map( item => {
                                return (
                                    <div className="row">
                                    <div className="col-md-4 cart-title">{item.name.slice(0,10)}</div>
                                    <div className="col-md-2">
                                        <button onClick={() =>addToCartHandler(item) } className="cart-button add">+</button>
                                    </div>
                                    <div >
                                        <button onClick={() => removeFromCartHandler(item)} className="cart-button remove">-</button>
                                    </div>
                                    <div className="col-md-4 text-right cart-item-number">
                                        {item.qty} x {item?.price}
                                    </div>
                                </div>
                                )
                            })
                     }
                    </>
                }
                {
                    cartItems.length !== 0 && (
                        <>
                            <hr></hr>
                            <div className="row">
                                <div className="col-md-4 cart-title">Items Price</div>
                                <div className="col-md-8 text-right cart-summary">{itemsPrice}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 cart-title">Shipping Cost</div>
                                <div className="col-md-8 text-right cart-summary">{shippingPrice}</div>
                            </div><div className="row">
                                <div className="col-md-4 cart-title"><strong>Total</strong></div>
                                <div className="col-md-8 text-right cart-summary"><strong>{totalPrice}</strong></div>
                            </div>
                        </>
                    )
                }
            </div>
        )
    }
}

export default Cart;