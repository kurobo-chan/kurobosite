import React from "react"

export default function Home() {
  return (
    <div className="top" id="pagetop">
      <header className="header partsGrid">
        <div className="inner">
          <div className="site">
            <a href="index.html">KUROBO site</a>
          </div>
          <button className="navbtn" onclick="navFunc()">
            <span className="navbtn-bar" />
            <span className="sr-only">MENU</span>
          </button>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="index.html">HOME</a>
            </li>
            <li>
              <a href="about.html">ABOUT</a>
            </li>
            <li>
              <a href="work.html">WORKS</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hero partsGrid">
        <div className="hero-placeholder" />
        <div className="hero-main" />
        <div className="grid12">
          <div className="inner">
            <figure>
              <img src="/images/kurobo.svg" alt="kurobo" />
            </figure>
            <div className="title">
              <h1>This is The site of KUROBO</h1>
              <p>KUROBOのサイトへようこそ</p>
            </div>
          </div>
        </div>
      </div>
      <main className="main partsGrid">
        <div className="grid12">
          <section className="RecentTweets">
            <h2>Recent Tweets</h2>
            <div className="tweet-box">tweetbox</div>
          </section>
        </div>
      </main>
      <footer className="footer partsGrid">
        <div className="footerMsg">Thank you for coming!</div>
        <div className="copyLight">©2021 KUROBO</div>
      </footer>
    </div>
  )
}
