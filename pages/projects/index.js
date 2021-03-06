import Head from 'next/head'
import { useState } from 'react'
// styles
import styled from 'styled-components'

// components
import ProjectList from '../../components/projects/project-list'
import ProjectDetail from '../../components/projects/project-detail'

function ProjectsPage() {

    const fakeItems = [
        { 
            id: 1,
            title: 'Safe Fur Dogs',
            brief: 'Find out what food is dog friendly.',
            description: 'Easily find a quick answer to whether or not a particular food or treat is safe for your dog, with links to reputable sources for more information and reading.',
            icon: '/icons/dog.svg',
            stack: ["React", "Redux", "styled-components", "MongoDB"],
            github: 'https://github.com/sq-int/safe-fur-dogs',
            deploy: 'https://safefurdogs.com'
        },
        {
            id: 2,
            title: 'Cron Calc',
            brief: 'Easily setup cron jobs.',
            description: 'Quickly identify what schedule a cron job will run at and build your own!',
            icon: '/icons/calculator.svg',
            stack: ["React", "Tailwind CSS"],
            github: 'https://github.com/alex-lc/cron-calc'
        },
        {
            id: 3,
            title: 'Ubbsorb',
            brief: 'Learn it all.',
            description: 'Accelerate your learning of subjects with easy to use flash cards.',
            icon: '/icons/brain.svg',
            stack: ["Next.js", "styled-components"]
        }
    ]

    const [selectedProject, setSelectedProject] = useState(fakeItems[0])

    return (
        <ProjectsContainer>
            <Head>
                <title>Alex Cooter | Recent Projects</title>
            </Head>

            <ProjectDetail selected={selectedProject} />
            <ProjectList projects={fakeItems} setSelectedProject={setSelectedProject} />
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

    @media (max-width: 1000px) {
        width: 80%;
    }

    @media(max-width: 800px) {
        margin-top: 5rem;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`