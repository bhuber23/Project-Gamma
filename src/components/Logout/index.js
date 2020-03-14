import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default class Logout extends Component {

    logOut = () => {
        fetch(`/auth/logout`);
    }
    
    render(){
        return(
            <div>
                <Link to="/"><button className='blue-button' id='logout-button' onClick={this.logOut}>Logout</button></Link>
            </div>
        )
    }
}