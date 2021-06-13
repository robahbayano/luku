import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import products from '../data/featured';
import Fade from 'react-reveal/Fade';

function Wemen() {
    return (
        <div className="women section" id="women">
            <h2 className="section-title">MEN SNEAKERS</h2>

            <Fade bottom cascade={true}>
            <div className="women__container bd-grid">
                {products.map((product =>
                    <article className="sneaker">
                        <img src={product.img} alt="ladies-shoe" className="sneaker__img"/>
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

export default Wemen;
