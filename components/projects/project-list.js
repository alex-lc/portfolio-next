// styles
import styled from 'styled-components'

// components
import ProjectItem from './project-item'

function ProjectList({ projects, setSelectedProject }) {
    return (
        <ProjectListContainer>
            <ListHeading>Recent Projects</ListHeading>
            {projects.map(project => <ProjectItem key={project.id} project={project} setSelectedProject={setSelectedProject} />)}
        </ProjectListContainer>
    )
}

export default ProjectList

const ProjectListContainer = styled.div`
    width: 40%;

    @media (max-width: 800px) {
        margin-top: 5rem;
        width: 80%;
    }
`

const ListHeading = styled.h2`
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 900;
`