import React from 'react';
import Fade from 'react-reveal/Fade';

function LogIn() {
    return (
        <Fade bottom cascade={true}>
        <div className="login__section section">
            <h2 className="section-title">LogIn</h2>
            <form>
                <input type="text" name="uid" placeholder="Enter username"/>
                <br/>
                <input type="password" name="password" placeholder="Enter password"/>
                <br/>
                <button type="submit" className="button">Login</button>
            </form>
            <hr/>
            <p>New to Luku?{' '}<a href="#">Register here</a></p>
        </div>
        </Fade>
    )
}

export default LogIn;
