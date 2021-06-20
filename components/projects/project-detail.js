// styles
import styled from 'styled-components'
// components
import TechStackItem from './stack-item'

function ProjectDetail({ selected }) {    
    return (
        <ProjectView>
            <ProjectTitle>{selected.title}</ProjectTitle>
            <ProjectDescription>{selected.description}</ProjectDescription>
            <StackGrid>
                {selected.stack.map(item => <TechStackItem key={item} item={item} />)}
            </StackGrid>
            {selected.github !== undefined && <InfoLinks><InfoButton className="infoButton">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <a target="_blank" href={selected.github} rel="noopener noreferrer">&nbsp; Repo</a>
            </InfoButton></InfoLinks>}
        </ProjectView>
    )
}

export default ProjectDetail

const ProjectView = styled.div`
    width: 55%;
`

const ProjectTitle = styled.h1`
    margin-bottom: 2rem;
    font-size: 4.5rem;
    font-weight: 900;
`

const ProjectDescription = styled.p`
    font-size: 2rem;
    font-weight: 200;
    line-height: 3rem;
`

const StackGrid = styled.div`
    margin-top: 2rem;
    padding: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 5px;
    row-gap: 10px;
`

const InfoLinks = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`

const InfoButton = styled.div`
    width: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.8rem;
    padding: 1.2rem 0;

    a:link {
        font-size: 1.6rem;
        font-weight: 600;
        text-decoration: none;
    }

    &:hover {
        cursor: pointer;
    }
`