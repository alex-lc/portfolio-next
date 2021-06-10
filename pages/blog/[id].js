
// utils
import { getAllPostIds, getPostById } from '../../utils'

function Post({ postData }) {
    
    return (
        <div>
            <h1>{postData.title}</h1>
            <h2>{postData.date}</h2>
            <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params }) {
    const postData = await getPostById(params.id)

    return {
        props: {
            postData
        }
    }
}

export default Post