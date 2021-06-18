// styles
import styled from 'styled-components'

function NotFound() {
    return (
        <MissingPage>
            <img src="/icons/dreamer.svg" alt="Not Found" />
            <p>We couldn't find that page...</p>
        </MissingPage>
    )
}

export default NotFound

const MissingPage = styled.section`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin-top: 5rem;
        font-size: 3rem;
        font-weight: 900;
    }

    img {
        width: 60rem;
    }
`