// styles
import styled from 'styled-components'

// components
import ProjectItem from './project-item'

function ProjectList({ projects }) {
    return (
        <ProjectListContainer>
            <ListHeading>Recent Projects</ListHeading>
            {projects.map(project => <ProjectItem key={project.id} title={project.title} description={project.description} image={project.image} />)}
        </ProjectListContainer>
    )
}

export default ProjectList

const ProjectListContainer = styled.div`
    width: 42%;
`

const ListHeading = styled.h2`
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 900;
`