// styles
import styled from 'styled-components'

function ProjectItem({ title, description, image, id, setSelectedProject }) {
    return (
        <ItemContainer className="projectItemSep" onClick={() => setSelectedProject({ title, description, image, id })}>
            <ProjectIcon><img src={image} alt={title} /></ProjectIcon>
            <Details>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
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