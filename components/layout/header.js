import Link from 'next/link'

// styles
import classes from './header.module.css'

function Header(props) {
    
    return (
        <div className={classes.headerContainer}>
            <svg onClick={props.toggle} xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>

            <ul className={classes.navList}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><a target="_blank" href="/files/alexander-cooter-resume-2021.pdf" rel="noopener noreferrer">Resume</a></li>
            </ul>
        </div>
    )
}

export default Header