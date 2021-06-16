import Head from 'next/head'

// utils
import { getAllPostIds, getPostById } from '../../utils'

// styles
import classes from './post.module.css'

function Post({ postData }) {
    
    return (
        <div className={classes.post}>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <h1 className={`${classes.title} heading`}>{postData.title}</h1>
            <h2 className={classes.date}>{postData.date}</h2>
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