import React from 'react';
import styles from '../../styles/projectsstyle.module.css';
import commonStyles from '../../styles/commonstyle.module.css';
import { NavLink } from 'react-router-dom';

const ProjectSummary = (props) => {

    return(
        <NavLink to={"/project/"+props.id} style={{color:"black"}}>
            <div className={`${styles.projectcard} card`}>
                <img src={props.photo} alt="gameImage"></img>
                <p className={commonStyles.title}>{props.title}</p>
                <p>{props.description}</p>
            </div>
        </NavLink>
    );

}

export default ProjectSummary;