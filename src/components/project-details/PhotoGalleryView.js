import React from 'react'
import styles from '../../styles/mystyle.module.css';


class PhotoGalleryView extends React.Component{

    constructor(props){
        super(props);
        this.state = {currentPhoto: 0};
    }

    increasePhoto = () => {
        const newCurrent = (this.state.currentPhoto < this.props.photos.length-1)? this.state.currentPhoto +1 : 0;
        this.setState(state => ({
            currentPhoto: newCurrent
        }));
    }

    decreasePhoto = () => {
        const newCurrent = (this.state.currentPhoto > 0)? this.state.currentPhoto -1 : this.props.photos.length-1;
        this.setState(state => ({
            currentPhoto: newCurrent
        }));
    }

    render () {

        if(!this.props.photos)
            return (<div></div>)

        const { photos } = this.props;

        if(photos.length === 0)
            return(<div></div>)

        const distance = this.state.currentPhoto * -70;
        var ctrans = 'translate('+distance+'vw, 0)';


        return (
            <div className={styles.projectpart}>
                <div style={{maxHeight:"24vw", overflow:"hidden"}}>
                    <div className={styles.carousel} style={{transform: ctrans}}>
                        {photos.map((photo) => {
                            return (
                            <div key={photo} className={styles.gameImage}>
                                <img alt="gameImage" src={photo}/>
                            </div>
                            )
                        })}
                    </div>
                    {(this.state.currentPhoto !== 0) ?
                        <div className={styles.leftControl}>
                            <button className={styles.photoButton} onClick={ () => this.decreasePhoto()}><i className="material-icons">navigate_before</i></button>
                        </div> : 
                        <div className={styles.leftControl}/>
                    }
                    {(this.state.currentPhoto !== this.props.photos.length-1) ?
                        <div className={styles.rightControl}>
                            <button className={styles.photoButton} onClick={ () => this.increasePhoto()}><i className="material-icons">navigate_next</i></button>
                        </div> :
                        <div className={styles.rightControl}/>}
                </div>
            </div>
        )
    }
}

export default PhotoGalleryView
