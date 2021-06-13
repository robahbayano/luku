import React from 'react'
import { Link } from 'react-router-dom'

function Offer() {
    return (
        <div className="offer section">
            <div className="offer__container bd-grid">
                <div className="offer__data">
                    <h3 className="offer__title">50% OFF</h3>
                    <p className="offer__description">In Suede superstar boots</p>
                    <Link to="/shop"><a href="#" className="button">Shop Now</a></Link>
                </div>
                <Link to="/shop"><img src="img/offer-1.png" alt="" className="offer__img"/></Link>
            </div>
        </div>
    )
}

export default Offer;
