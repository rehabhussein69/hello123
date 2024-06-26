
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                
              </div>
              
                <h3> contact us</h3>
<a
                    href="#"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                
                <a
                    href="#"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="#"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>

                
            </div>
        </footer>
    );
};

export default Footer;