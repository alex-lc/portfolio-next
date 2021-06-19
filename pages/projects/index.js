import Head from 'next/head'
// styles
import styled from 'styled-components'

// components
import ProjectList from '../../components/projects/project-list'
import ProjectDetail from '../../components/projects/project-detail'

function ProjectsPage() {

    const fakeItems = [
        { id: 1, title: 'Safe Fur Dogs', description: 'Find out what food is dog friendly.', image: '/icons/dog.svg' },
        { id: 2, title: 'Cron Calc', description: 'Easily setup cron jobs.', image: '/icons/calculator.svg' },
        { id: 3, title: 'Ubbsorb', description: 'Learn it all.', image: '/icons/brain.svg' }
    ]

    return (
        <ProjectsContainer>
            <Head>
                <title>Alex Cooter | Recent Projects</title>
            </Head>

            <ProjectDetail />
            <ProjectList projects={fakeItems} />
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
`