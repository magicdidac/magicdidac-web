import React from 'react';
import commonStyles from '../../styles/commonstyle.module.css';
import styles from '../../styles/mystyle.module.css';
import web from '../../resources/img/web-icon.png';
import gplay from '../../resources/img/gplay-icon.png';
import astore from '../../resources/img/astore-icon.png';
import windows from '../../resources/img/windows-icon.png';
import linux from '../../resources/img/linux-icon.png';
import macos from '../../resources/img/macos-icon.png';
import LinkButton from '../common/LinkButtonComponent';

const Links = props => {

    var linksNum = 0;

    for(let i = 0; i < Object.keys(props.links).length; i++){
        if (props.links[Object.keys(props.links)[i]])
            linksNum++;
    }

    if(linksNum === 0)
        return(<div></div>)

    const difference = (100*(6-linksNum))/12;
    var calculatedMargin = difference+"%";


    return (
        <div className="container section">
            <div className="card z-depth-0">
                <div className={commonStyles.centerText}>
                    <h3>Links</h3>
                    <div className={styles.projectpart} style={{width:"100%", marginLeft:calculatedMargin}}>
                         <div className="row">
                            
                            <LinkButton
                            link={props.links.web}
                            icon={web}
                            text="Web"/>

                            <LinkButton
                            link={props.links.gplay}
                            icon={gplay}
                            text="Google Play"/>

                            <LinkButton
                            link={props.links.astore}
                            icon={astore}
                            text="App Store"/>

                            <LinkButton
                            link={props.links.windows}
                            icon={windows}
                            text="Windows"/>

                            <LinkButton
                            link={props.links.linux}
                            icon={linux}
                            text="Linux"/>

                            <LinkButton
                            link={props.links.macos}
                            icon={macos}
                            text="MacOs"/>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links
