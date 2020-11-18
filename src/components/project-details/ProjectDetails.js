import React from 'react'
import ReactPlayer from 'react-player';
import PhotoGalleryView from './PhotoGalleryView';
import commonStyles from '../../styles/commonstyle.module.css';
import Links from './LinksComponent';
import Footer from '../Footer';
import DescriptionComponent from '../common/DescriptionComponent';
import styles from '../../styles/mystyle.module.css';

class ProjectDetails extends React.Component{

    componentDidMount(){
        //GET DETAILS
        fetch('https://magicdvstudio.com/mygames/php/getProjectDetailsById.php', {
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
                this.setState({project: responseJson[0]});
            })
            .catch((error) => {
                console.log("ERROR on call DB");
            })
        
        //GET PHOTOS
        fetch('https://magicdvstudio.com/mygames/php/getProjectPhotosById.php', {
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
                this.setState({photos: responseJson});
            })
            .catch((error) => {
                console.log(error);
                console.log("ERROR on call DB");
            })
    }

    getPhotos(){
        if(!this.state || !this.state.photos){
            return [];
        }

        var photos = [];

        for(let i = 0; i < Object.keys(this.state.photos).length; i++){
            photos.push(this.state.photos[Object.keys(this.state.photos)[i]].image);
        }

        return photos;
    }

    getLinks(){
        if(!this.state || !this.state.project)
            return {};

        return {
            "web" : this.state.project.web,
            "gplay" : this.state.project.gplay,
            "astore" : this.state.project.astore,
            "windows" : this.state.project.windows,
            "linux" : this.state.project.linux,
            "macos" : this.state.project.macos
        }
    }

    render(){
        return (
            <div className={commonStyles.noselect}>
                <div className="container section">
                    <div className="card z-depth-0">
                        <div>
                            <h3>{(this.state && this.state.project) ? this.state.project.title: ""}</h3>
                            <p>{(this.state && this.state.project) ? this.state.project.type: ""}</p>
                        </div>
                        <div className="card-action"/>

                        <ReactPlayer
                        width="40vw"
                        height="22.5vw"
                        playing
                        muted
                        controls
                        url={(this.state && this.state.project) ? this.state.project.video: ""}
                        />

                        <div className={styles.projectpart}>
                            <div className={styles.projectdescription}>
                                <DescriptionComponent
                                description={(this.state && this.state.project) ? this.state.project.description: ""}/>
                            </div>
                        </div>

                    </div>
                </div>

                <PhotoGalleryView
                photos={this.getPhotos()}/>
                
                <Links
                links={this.getLinks()}/>

                <Footer />
            </div>
        )
    }
}

export default ProjectDetails;
