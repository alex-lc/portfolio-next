// styles
import styled from 'styled-components'

function ProjectItem({ project, setSelectedProject }) {

    const { title, brief, icon } = project
    
    return (
        <ItemContainer className="projectItemSep" onClick={() => setSelectedProject(project)}>
            {/* <ProjectIcon className="eye">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            </ProjectIcon> */}
            <Details>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{brief}</ProjectDescription>
            </Details>
        </ItemContainer>
    )
}

export default ProjectItem

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4rem 1rem 4rem 2rem;
    width: 100%;
    height: 5rem;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 75%;
`

const ProjectTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: 600;
`

const ProjectDescription = styled.p`
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 200;
`

const ProjectIcon = styled.div`
    width: 20%;
    display: flex;
    align-items: center;

    img {
        width: 48px;
        height: 48px;
    }

`