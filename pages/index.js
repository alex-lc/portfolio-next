import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

// styles
import classes from '../styles/Home.module.css'
import styled from 'styled-components'

// utils
import { getRecentPosts } from '../utils'

export default function Home(props) {

  const { recent } = props

  if (!recent) {
    return <p>Loading...</p>
  }

  return (
    <Fragment>
      <Head>
        <title>Alex Cooter | Full Stack Developer</title>
        <meta name="description" content="A full stack developer who specializes in React, with a primary interest in cyber security." />
      </Head>
      <Hero>
        <Tagline className="tagline">👋🏼  Hi, I'm Alex.</Tagline>
        <Social>
          <a target="_blank" href="https://github.com/alex-lc" rel="noopener noreferrer"><img width="36" height="36" src="/icons/github.svg" alt="GitHub" /></a>
          <a target="_blank" href="https:/twitter.com/alexlcooter" rel="noopener noreferrer"><img width="36" height="36" src="/icons/twitter.svg" alt="Twitter" /></a>
        </Social>
      </Hero>
      
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

const Hero = styled.section`
  margin-top: 5rem;
  width: 60%;
  display: flex;
  align-items: center;
`

const Tagline = styled.h1`
  width: 50%;
  font-size: 4rem;
  font-weight: 700;
`

const Social = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 36px;
    height: 36px;
    margin-left: 2rem;

    &:hover {
      opacity: 0.9;
      cursor: pointer;
    }
  }
`