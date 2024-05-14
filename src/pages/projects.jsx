import ProjectCard from "../components/projectCard";
import projects from '../projects.json';
import { Fragment } from 'react';
import '../assets/css/projects.css'
// import 'src/assets/images/tic-tac-too-screenshot.png'


function Projects(props) {

    return (
        <div className={``}>
            <div className={`row g-0`}>
            <h2 className={`projects-header mb-3 p-4 shadow`}> Projects </h2>
            </div>
        <div className={`m-2 justify-content-around row col align-items-center `}>
            {projects.map((project) => (
                <Fragment key={project.id}>
                    <ProjectCard project={project}></ProjectCard>
                </Fragment>
            ))}
        </div>
        </div>
    )
}

export default Projects