import React from "react"
import { graphql, useStaticQuery,Link } from "gatsby"

export default function Home() {
  const navFunc = () => {
    document.querySelector("html").classList.toggle("open")
  }
  return (
    <header className="header partsGrid">
      <div className="inner">
        <div className="site">
          <Link to={`/`}>KUROBO site</Link>
        </div>
        <button className="navbtn" onClick={navFunc}>
          <span className="navbtn-bar" />
          <span className="sr-only">MENU</span>
        </button>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to={`/`} onClick={navFunc}>
              HOME
            </Link>
          </li>
          <li>
            <Link to={`/about/`} onClick={navFunc}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href={`/works/`} onClick={navFunc}>
              WORKS
            </Link>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
