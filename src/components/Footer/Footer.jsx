import React from "react";
import "./Footer.css";
import logo3 from '../../img/LOGO_footer.png';

function Footer() {

    return  (
            <footer>
                <div className="couleurNoir">
                    <br></br>
                    <br></br>
                    <img src={logo3} alt="logo" cless="logo3"/>
                    <br></br>
                    <p>© 2020 Kasa. All rights reserved</p>
                    <br></br>
                </div>
            </footer>
    )
}

export default Footer;