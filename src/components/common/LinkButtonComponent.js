import React from 'react'
import { isMobile } from "react-device-detect";

const LinkButton = props => {
    const { link, icon, text} = props;
    if(!isMobile){
        return ( 
        <div>
            {(link) && <div className="col s2">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img alt="icon" src={icon} style={{width:"50%"}}></img>
                    <h5 style={{color:"#4e007c"}}>{text}</h5>
                </a>
            </div>}
        </div>
        )
    } else {
        return ( 
            <div>
                {(link) && <div className="col s2">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img alt="icon" src={icon} style={{width:"100%"}}></img>
                    </a>
                </div>}
            </div>
            )
    }
}

export default LinkButton;