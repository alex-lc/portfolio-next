// styles
import styled from 'styled-components'

// components
import ProjectItem from './project-item'

function ProjectList() {

    const fakeItems = [
        { id: 1, title: 'Project 1' },
        { id: 2, title: 'Project 2' },
        { id: 3, title: 'Project 3' },
        { id: 4, title: 'Project 4' },
        { id: 5, title: 'Project 5' }
    ]
    
    return (
        <ProjectListContainer>
            {fakeItems.map(project => <ProjectItem key={project.id} />)}
        </ProjectListContainer>
    )
}

export default ProjectList

const ProjectListContainer = styled.div`
    width: 42%;
    background: #444444;
`