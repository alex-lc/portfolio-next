// styles
import styled from 'styled-components'

function ProjectDetail({ selected }) {    
    return (
        <ProjectView>
            <h1>{selected.title}</h1>
            <p>{selected.description}</p>
            {selected.stack.map(item => <div key={item}>{item}</div>)}
        </ProjectView>
    )
}

export default ProjectDetail

const ProjectView = styled.div`
    width: 55%;
    background: #444444;
`