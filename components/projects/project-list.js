// styles
import styled from 'styled-components'

// components
import ProjectItem from './project-item'

function ProjectList() {

    const fakeItems = [
        { id: 1, title: 'Safe Fur Dogs', description: 'Find out what food is dog friendly.', image: '/icons/dog.svg' },
        { id: 2, title: 'Cron Calc', description: 'Easily setup cron jobs.', image: '/icons/calculator.svg' },
        { id: 3, title: 'Ubbsorb', description: 'Learn it all.', image: '/icons/brain.svg' }
    ]
    
    return (
        <ProjectListContainer>
            <ListHeading>Recent Projects</ListHeading>
            {fakeItems.map(project => <ProjectItem key={project.id} title={project.title} description={project.description} image={project.image} />)}
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