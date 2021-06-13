import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import products from '../data/women';

function NewCollection() {
    return (
        <div className="new section" id="new">
            <h2 className="section-title">NEW COLLECTION</h2>
            <div className="new__container bd-grid">
                <div className="new__mens">
                    <Link to="/womens"><img src="img/offer-3.png" alt="men shoes" className="new__mens-img"/></Link>
                    <h3 className="new__title">Womens Shoes</h3>
                    <span className="new__price">From kes 699</span>
                    <Link to="/womens"><a href="#" className="button-light">View Collection <BsArrowRight className="button-icon"/></a></Link>
                </div>
                {products.map((product => 
                    <div className="new__sneaker-card">
                    <img src={product.img} alt="men-shoes" className="new__sneaker-img"/>
                    <div className="new__sneaker-overlay">
                        <a href="#" className="button">Add to Cart</a>
                    </div> 
                </div>
                ))};
            </div>
        </div>
    )
}

export default NewCollection;
