import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Collections() {
    return (
        <div className="collection section">
            <div className="collection__container bd-grid">
                <div className="collection__card">
                    <div className="collection__data">
                        <h3 className="collection__name">Nike</h3>
                        <p className="collection__description">New collection 2021</p>
                        <Link to="/shop"><a href="#" className="button-light">View now <BsArrowRight className="button-icon"/></a></Link>
                    </div>
                    <Link to="/shop"><img src="img/col-1.png" alt="shoe-collection" className="collection__img"/></Link>
                </div>
                <div className="collection__card">
                    <div className="collection__data">
                        <h3 className="collection__name">Official</h3>
                        <p className="collection__description">New collection 2021</p>
                        <Link to="/shop"><a href="#" className="button-light">View now <BsArrowRight className="button-icon"/></a></Link>
                    </div>
                    <Link to="/shop"><img src="img/col-2.png" alt="shoe-collection" className="collection__img"/></Link>
                </div>
                
            </div>
            
        </div>
    )
}

export default Collections;
