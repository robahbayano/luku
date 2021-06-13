import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import products from '../data/data';
import Fade from 'react-reveal/Fade';

function Shop(props) {
    
    return (
        <div className="featured section">
            <h2 className="section-title">Shop Now</h2>

            <Fade bottom cascade={true}>
            <div className="featured__container bd-grid">
                {products.map(product => (
                    <article className="sneaker">
                        <div className="sneaker__sale">Sale</div>
                        <div className="sneaker__img__div"><Link to="/product"><img src={product.img} alt="shoe" className="sneaker__img"/></Link></div>
                        <span className="sneaker__name">{product.name}</span>
                        <span className="sneaker__price">kes{' '}{product.price}</span>
                        <a href="#" className="button-light"><Link to="/product">Add To Cart</Link><BsArrowRight className="button-icon"/> </a>
                    </article>
                ))};
            </div>
            </Fade>
        </div>
    )
}

export default Shop;
