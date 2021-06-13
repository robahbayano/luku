import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Home() {
    return (
        <div className="home" id="home">
            <div className="home__container bd-grid">
                <Fade bottom cascade={true}>
                <div className="home__sneaker">
                    <div className="home__shape"></div>
                    <img src="img/p-5.png" alt="shoe" className="home__img"/>
                </div>
                </Fade>

                <Fade bottom cascade={true}>
                <div className="home__data">
                    <span className="hame__new">New in</span>
                    <h1 className="home__title">NEW MEN <br/> CLASSICS</h1>
                    <p className="home__description">Explore the new collections of sneakers</p>
                    <Link to="/shop"><a href="#" className="button">Explore now</a></Link>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Home;
