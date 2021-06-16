import { Fragment } from 'react'
import Link from 'next/link'

// styles
import classes from '../styles/Home.module.css'

// utils
import { getRecentPosts } from '../utils'

export default function Home(props) {

  const { recent } = props

  if (!recent) {
    return <p>Loading...</p>
  }

  return (
    <Fragment>
      <h1 className={`${classes.title} tagline`}>👋🏼 Hi, I'm Alex.</h1>
      
      <div className={classes.recentPostContainer}>
        <div className={`${classes.homeTitle} separator`}>Recent Blog Posts</div>
        {recent.map(post => <div className={classes.recentPost} key={post.id}>
          <div className={classes.postContents}>
            <h2 className="heading"><Link href={`/blog/${post.id}`}>{post.title}</Link></h2>
            <h3 className="postDate">{post.date}</h3>
            <p>{post.excerpt}</p>
          </div>
        </div>)}
      </div>
    </Fragment>
  )
}

export async function getStaticProps() {
  const posts = await getRecentPosts()

  return {
    props: {
      recent: posts
    }
  }
}