import Link from 'next/link'

// styles
import classes from './header.module.css'

function Header() {
    return (
        <ul className={classes.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/resume">Resume</Link></li>
        </ul>
    )
}

export default Header