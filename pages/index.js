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
        <meta name="description" content="Full stack developer who specializes in React, with a primary focus in application and cyber security. CompTIA Security+ Certified" />
      </Head>
      <Hero>
        <Tagline className="tagline">👋🏼  Hi, I'm Alex.</Tagline>
        <Social>
          <a target="_blank" href="https://www.linkedin.com/in/alexander-cooter/" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill="#0072b1" width="32" height="32" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
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
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`

const Tagline = styled.h1`
  width: 70%;
  font-size: 4rem;
  font-weight: 700;

  @media (max-width: 550px) {
    font-size: 3rem;
  }
`

const Social = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;

  svg {
    margin-left: 1.5rem;
    
    &:hover {
      cursor: pointer;
    }
  }
`