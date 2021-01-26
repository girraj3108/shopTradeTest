import React from 'react';
import logo from "../images/logoo.svg";
import search from "../images/search.svg";
import person from "../images/person.svg";
import cart from "../images/cart.svg";

import "./Header.css"
class Header extends React.Component{

    render(){

        return(
            <nav className="page-header">
                <div className="header-wrapper">
                    <div className="header-logo">
                        <img className="logo-icon" src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/klvus8ues4zpawx3fkhq"/>
                    </div>

                    

                    <div className="header-items-list-wrapper">
                        <ul className="header-items-list">
                            <li>Shop</li>
                            <li>About Us</li>
                            <li>Our Stores</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    
                    <div className="header-items-lists-2-wrapper">
                        <ul className="header-items-lists-2">
                            <li><span>search </span><img src={search}/></li>
                            <li><img src={person} alt=""/></li>
                            <li><img src={cart} className="cart-icon" alt=""/></li> 
                        </ul>
                    </div>
                </div>
          </nav>
        )
    }
}

export default Header;