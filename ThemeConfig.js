
import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  heading: '#0584FC',
  postDate: '#727272',
  separator: '#0584FC',
  tagline: '#0584FC',
  navLink: '#363537',
  projectItemSep: '#141414'
}

export const darkTheme = {
  body: '#141414',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  heading: '#eff28a',
  postDate: '#ffffff',
  separator: '#eff28a',
  tagline: '#eff28a',
  navLink: '#ffffff',
  projectItemSep: '#ffffff'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  
  .heading {
    color: ${({ theme }) => theme.heading};
  }
  
  .heading a:link {
    color: ${({ theme }) => theme.heading};
  }
  
  .heading a:visited {
    color: ${({ theme }) => theme.heading};
  }

  .postDate {
    color: ${({ theme }) => theme.postDate};
  }

  .separator {
    border-bottom: 2px solid ${({ theme }) => theme.separator}
  }

  .tagline {
    color: ${({ theme }) => theme.tagline};
  }

  .navLink a:link {
    color: ${({ theme }) => theme.navLink};
  }

  .navLink a:visited {
    color: ${({ theme }) => theme.navLink};
  }

  .projectItemSep {
    border-bottom: 1px solid ${({ theme }) => theme.projectItemSep}
  }
  `