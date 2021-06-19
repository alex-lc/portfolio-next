// styles
import styled from 'styled-components'

function ProjectDetail({ selectedProject }) {
    
    return (
        <ProjectView>
            test
            {/* <h1>{selectedProject.title}</h1>
            <p>{selectedProject.description}</p> */}
        </ProjectView>
    )
}

export default ProjectDetail

const ProjectView = styled.div`
    width: 55%;
    background: #444444;
`