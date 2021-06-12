import { Fragment } from 'react'
import { useRouter } from 'next/router'

// styles
import classes from '../styles/Home.module.css'

// utils
import { getRecentPosts } from '../utils'

export default function Home(props) {

  const { recent } = props

  const router = useRouter()

  if (!recent) {
    return <p>Loading...</p>
  }

  return (
    <Fragment>
      <h1 className={classes.title}>👋🏼 Hi, I'm Alex.</h1>
      
      <div className={classes.recentPostContainer}>
        {recent.map(post => <div className={classes.recentPost} key={post.id}>
          <h2>{post.title}</h2>
          <h3>{post.date}</h3>
          <p>{post.excerpt}</p>
          <p className={classes.readMore}>Read on...</p>
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