import React from 'react'

const LinkButton = props => {
    const { link, icon, text} = props;
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
}

export default LinkButton;