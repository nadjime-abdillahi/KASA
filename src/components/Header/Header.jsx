import * as React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import logo2 from '../../img/LOGO.png';

export default function header () {
    return (
        <header className="App-header">
            <div>
            <img src={logo2} alt='logo'/>
            <nav>
                <ul>
                <li>
                    <Link to="/">Acceuil</Link>
                </li>
                <li>
                    <Link to="/about">À propos</Link>
                </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}