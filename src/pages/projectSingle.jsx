import { useState, useEffect } from 'react';
import Card from "../components/card"
import { useParams, Link } from 'react-router-dom';
import projects from '../projects.json';

function findProject(id) {
    for(let i =0; i <projects.length; i++){
        console.log(projects[i].id)
        if(projects[i].id == id){
            return projects[i];
        }
    }
    return null;

}

function ProjectSingle(props) {
    
    let {id} = useParams();
    console.log(id);
    let project = findProject(id);
    const {description, motives, future} = project;
    
    return (
        
        <div className={`single-page container-fluid`}>
            <div className={`row justify-content-center g-1`}>
            <h2 className={`project-header mb-2 mt-2 p-4`}> {project.name} </h2>
            </div>
            <div className={`container`}>

            <div className={`img-wrapper row`}>
                <img src={project.source} alt={project.alt} className={`project-single-image`}  />
            </div>
            <section className={`project-info row`}>
                {/* description */}
                <Card header = {description.header} body = {description.body}/>
                {/* Motives and technologies */}
                <Card header = {motives.header} body = {motives.body}/>
                {/* future development */}
                <Card header = {future.header} body = {future.body}/>
            </section>
            </div>
        </div>
    )
}

export default ProjectSingle;