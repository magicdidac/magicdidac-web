import React from 'react';
import largelogo from "../resources/img/largelogo.svg";
import styles from '../styles/welcomestyle.module.css';
import commonStyles from '../styles/commonstyle.module.css';

const Welcome = () => {

    return(
        <div className={`${styles.titleBox} ${commonStyles.noselect}`}>
            <div>
                <img alt="logo" src={largelogo}/>
            </div>
            <div>- This is my portfolio -</div>
        </div>
    )
            /*<div style={{width:"100%", height:"75%", backgroundColor:"red"}}>

            </div>
            <div style={{width:"100%", height:"20%", position:"relative", top:"5%", backgroundColor:"green"}}>
                <p style={{fontSize:"large"}}>- This is my portfolio -</p>
            </div>*/

    /*return(
        <div className="container">
            <div style={{marginTop:"30vh",height:"50vh"}}>
                <div className="row">
                    <img alt="logo" src={largelogo} className="col s12 m12"/>
                </div>
                <div className="row">
                    <h1 className="center col s12 m12">- This is my portfolio -</h1>
                </div>
            </div>
        </div>
    );*/

}

export default Welcome;