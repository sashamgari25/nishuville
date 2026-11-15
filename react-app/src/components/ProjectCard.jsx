import './ProjectCard.css';
import ExternalLinkIcon from './ExternalLinkIcon.jsx';

function ProjectCard( {project} ) {

    return (
        
        <article className="project-card">
            <p className="project-number">Project / {project.number.toString().padStart(3, "0")}</p>
            <div className="project-preview">
                <img src={project.image} alt={`Screenshot of the ${project.title} website`}/>   
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                    
                <div className="project-bottom">
                    <ul className="tech-stack">
                        {project.technologies.map(tech => (
                        <li key={tech}>{tech}</li>
                    ))}
                    </ul>

                    <a
                    className="project-link sound-nav"
                    href={project.links.live}
                    aria-label={`Open ${project.title} website`}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <ExternalLinkIcon />
                    </a>
                </div>
            </div>

        </article>

    )
}

export default ProjectCard;