import React from 'react';
import { withRouter } from 'react-router-dom';
import './Logo.css'

const Logo = (props) => {
    return ( 
        <div className="Logo" onClick={() => props.history.push("/")}>
            <img src="https://news.ycombinator.com/y18.gif" /> <p>Hacker News</p> <small>reader</small>
        </div>
     );
}
 
export default withRouter(Logo);