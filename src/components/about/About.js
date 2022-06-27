import React, { Component } from 'react';
import commonStyles from '../../styles/commonstyle.module.css';
import DescriptionComponent from '../common/DescriptionComponent';
import AboutLinks from './AboutLinksComponent';
import Footer from '../Footer';

export default class About extends Component {

    componentDidMount(){
        //GET DETAILS
        fetch('https://magicdidac.com/web/php/getAboutInfo.php', {
            method: 'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                "id": this.props.match.params.id
            })
        }).then((response) => response.json())
            .then((responseJson) =>{
                this.setState({about: responseJson[0]});
            })
            .catch((error) => {
                console.log("ERROR on call DB");
            })
    }

    getLinks(){
        if(!this.state || !this.state.about)
            return {};

        return {
            "gmail" : this.state.about.mail,
            "github" : this.state.about.github,
            "twitch" : this.state.about.twitch,
            "twitter" : this.state.about.twitter,
            "youtube" : this.state.about.youtube,
            "youtubedev" : this.state.about.youtubedev
        }
    }

    render() {
        return (
            <div className={commonStyles.noselect}>
                <div className="container section">
                    <div className="card z-depth-0">
                        <div>
                            <h3>About Me</h3>
                            <p>Dídac Padilla (magicdidac)</p>
                        </div>
                        <div className="card-action"/>
                        <DescriptionComponent
                        description={(this.state && this.state.about) ? this.state.about.description: ""}/>
                    </div>
                </div>
                <AboutLinks
                links={this.getLinks()}/>

                <Footer />
            </div>
        )
    }
}
