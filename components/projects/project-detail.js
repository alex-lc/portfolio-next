// styles
import styled from 'styled-components'
// components
import TechStackItem from './stack-item'

function ProjectDetail({ selected }) {    
    return (
        <ProjectView>
            <h1>{selected.title}</h1>
            <p>{selected.description}</p>
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

const StackGrid = styled.div`
    margin-top: 2rem;
    padding: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 5px;
`