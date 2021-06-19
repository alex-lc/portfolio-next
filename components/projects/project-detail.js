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
    // text-align: center;
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
`