// styles
import styled, { ThemeProvider } from 'styled-components'

function TechStackItem({ item }) {
    return (
        <ItemContainer className="stackItem">
            {item}
        </ItemContainer>
    )
}

export default TechStackItem

const ItemContainer = styled.div`
    padding: 0.8rem 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    font-size: 1.2rem;
`