import React from 'react'
import commonStyles from '../../styles/commonstyle.module.css';
import styles from '../../styles/mystyle.module.css';
import LinkButton from '../common/LinkButtonComponent';
import github from '../../resources/img/github-icon.png';
import gmail from '../../resources/img/gmail-icon.png';
import twitch from '../../resources/img/twitch-icon.png';
import twitter from '../../resources/img/twitter-icon.png';
import youtube from '../../resources/img/youtube-icon.png';
import youtubedev from '../../resources/img/youtubedev-icon.png';

const AboutLinks = props => {
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
                            link={props.links.gmail}
                            icon={gmail}
                            text="Gmail"/>

                            <LinkButton
                            link={props.links.github}
                            icon={github}
                            text="Github"/>

                            <LinkButton
                            link={props.links.twitter}
                            icon={twitter}
                            text="Twitter"/>

                            <LinkButton
                            link={props.links.youtube}
                            icon={youtube}
                            text="Youtube"/>

                            <LinkButton
                            link={props.links.youtubedev}
                            icon={youtubedev}
                            text="Dev Logs"/>

                            <LinkButton
                            link={props.links.twitch}
                            icon={twitch}
                            text="Twitch"/>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutLinks
