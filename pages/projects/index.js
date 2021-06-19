import Head from 'next/head'
// styles
import styled from 'styled-components'

// components
import ProjectList from '../../components/projects/project-list'
import ProjectDetail from '../../components/projects/project-detail'

function ProjectsPage() {
    return (
        <ProjectsContainer>
            <Head>
                <title>Alex Cooter | Recent Projects</title>
            </Head>
            <ProjectView>
                <ProjectDetail />
            </ProjectView>

            <ProjectListContainer>
                <ProjectList />
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