import React from 'react'
import { isMobile } from "react-device-detect";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                {!isMobile ?
                
            <p className="right hide-on-med-and-down">© 2020 Copyright magicdidac</p>
            : <p className="right">© 2020 Copyright magicdidac</p>
                }
            </div>
        </div>
    )
}

export default Footer
