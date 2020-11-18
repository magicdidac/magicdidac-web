import React from 'react';
import styles from '../../styles/mystyle.module.css';

const DescriptionComponent = props => {

    if(!props.description)
        return (<div></div>);

    return (
        <div>

            {props.description.split("<br>").map((line) => {
                return(
                    <div key={line}>
                        <p className={styles.projectdescriptiontext}>{line}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default DescriptionComponent
