import React from 'react';
import { BsArrowRight } from 'react-icons/bs'; 
import products from '../data/featured';
import Fade from 'react-reveal/Fade';

function Featured() {
    return (
        <div className="featured section" id="featured">
            <h2 className="section-title">FEATURED</h2>

            <Fade bottom cascade={true}>
            <div className="featured__container bd-grid">
                {products.map((product =>
                    <article className="sneaker">
                        <div className="sneaker__sale">Sale</div>
                        <img src={product.img} alt="shoe" className="sneaker__img"/>
                        <span className="sneaker__name">{product.name}</span>
                        <span className="sneaker__price">kes {product.price}</span>
                        <a href="#" className="button-light">Add to Cart <BsArrowRight className="button-icon"/> </a>
                    </article>
                    
                ))};
            </div>
            </Fade>
        </div>
    )
}

export default Featured;
