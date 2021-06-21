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

            <InfoGrid>
                {/* project has a github repo */}
                {selected.github !== undefined && <InfoLinks><InfoButton className="infoButton">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <a target="_blank" href={selected.github} rel="noopener noreferrer">&nbsp; Repo</a>
                </InfoButton></InfoLinks>}

                {/* project has a live deployment */}
                {selected.deploy !== undefined && <InfoLinks><InfoButton className="infoButton">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <a target="_blank" href={selected.deploy} rel="noopener noreferrer">&nbsp; Live</a>
                </InfoButton></InfoLinks>}
            </InfoGrid>

        </ProjectView>
    )
}

export default ProjectDetail

const ProjectView = styled.div`
    width: 55%;

    @media (max-width: 800px) {
        width: 80%;
    }
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

const InfoGrid = styled.div`
    padding: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: 30% 30%;
    column-gap: 10px;
    row-gap: 10px;
    justify-content: center;
    justify-items: center;
    align-items: center;
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