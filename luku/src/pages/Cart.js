import React from 'react';
import Fade from 'react-reveal/Fade';

function Cart() {
    return (
        <div className="cart__section section">
            
            <div className="cart__left">
                <div>
                    <h2 >Shopping Cart</h2>
                </div>
                <hr/>
                <Fade bottom cascade={true}>
                <div className="cart__card">
                    <div className="cart__img">
                        <img src="img/p-1.png"/>
                    </div>
                    <div className="cart__details">
                        <h4>Product Name</h4>
                        <p>PRICE: kes <b>1400</b></p>
                        <p>COLOR: <b>Green</b></p>
                        <a href="#" className="button">Remove</a>
                    </div>
                </div>
                </Fade>
                <hr/>
            </div>

            <Fade bottom cascade={true}>
            <div className="cart__right">
                <h2 className="section-title">Oder Summary</h2>
                <hr/>
                <div>
                    <div className="cart__item"><a>ITEMS 2</a> <a>kes 1800</a></div>
                    <div className="cart__item">SHIPPING</div>
                    <select className="cart__delivery">
                        <option>Standard delivery - kes 50</option>
                        <option>Home delivery - kes 200</option>
                        <option>Abroad delivery - kes 320</option>
                    </select>
                </div>
                <hr/>
                <div>
                    <div className="cart__item"><a>TOTAL COST</a> <a>kes 1800</a></div>
                    <a href="#" className="button">CHECKOUT</a>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Cart;
