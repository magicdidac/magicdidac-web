import React from 'react';
import commonStyles from '../../styles/commonstyle.module.css';
import ProjectSummary from './ProjectSummary'
import Footer from '../Footer';
import { isMobile } from "react-device-detect";

class Projects extends React.Component{

    componentDidMount(){
        fetch('https://magicdidac.com/web/php/getAllProjects.php', {
            method: 'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        }).then((response) => response.json())
            .then((responseJson) =>{
                this.setState({projects: responseJson});
            })
            .catch((error) => {
                console.log("ERROR on call DB");
            })
    }

    getProjects() {

        if(!this.state || !this.state.projects){
            return [];
        }

        return this.state.projects;
    }

    render(){
        return (
            <div className={commonStyles.noselect}>
                <div className="container section">
                    <div className="card z-depth-0">
                        <div>
                            <h3>My Projects</h3>
                        </div>
                        <div className="card-action"/>

                        {!isMobile ?
                        <div className={commonStyles.grid2columns}>

                            {this.getProjects().map((project) => {
                                return(
                                <ProjectSummary
                                key={project.id} 
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                photo={project.banner}/>
                                )
                            })}
                        </div>
                        :
                        <div className={commonStyles.gridOnecolumns}>

                            {this.getProjects().map((project) => {
                                return(
                                <ProjectSummary
                                key={project.id} 
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                photo={project.banner}/>
                                )
                            })}
                        </div>
                        }

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Projects;
