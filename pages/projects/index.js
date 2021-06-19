// styles
import styled from 'styled-components'

function ProjectsPage() {
    return (
        <ProjectsContainer>
            <ProjectView>
                Project here
            </ProjectView>

            <ProjectListContainer>
                List of projects
            </ProjectListContainer>
        </ProjectsContainer>
    )
}

export default ProjectsPage

const ProjectsContainer = styled.section`
    margin-top: 5rem;
    width: 60%;
    height: 80vh;
    display: flex;
    justify-content: space-between;
    background: gray;
`

const ProjectView = styled.div`
    width: 55%;
    background: #444444;
`

const ProjectListContainer = styled.div`
    width: 42%;
    background: #444444;
`