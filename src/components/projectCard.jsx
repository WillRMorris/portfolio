import { Link } from "react-router-dom";


function ProjectCard ({project}) {

const imgStyle = {
    backgroundImage: `url(${project.source})`,
}

    return(
        <div className={`p-card col-sm-6 align-self-center shadow rounded m-5 row`} title={project.alt} style={imgStyle} key={project.id}>
            <Link to = {`${project.id}`} className= {`p-card-link rounded`} ></Link>
            <h3 className= {'p-card-header rounded p-2'}> {project.name} </h3>

        </div>
    )
}

export default ProjectCard;