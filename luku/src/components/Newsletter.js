import React from 'react'

function Newsletter() {
    return (
        <div className="newsletter section">
            <div className="newsletter__container bd-grid">
                <div>
                    <h3 className="newsletter__title">Subscribe And Get <br/> 10% OFF</h3>
                    <p className="newsletter__description">Get 10% discount for all products</p>
                </div>
                <form action="" className="newsletter__subscribe">
                    <input type="email" placeholder="example@mail.com" className="newsletter__input"/>
                    <a href="#" className="button">Subscribe</a>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;
