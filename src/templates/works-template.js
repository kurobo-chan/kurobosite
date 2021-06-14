import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Imgix from "react-imgix"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data, location, pageContext }) {
  return (
    <Layout>
      <SEO
        pagetitle="作品一覧"
        pagedesc="これまでの制作物"
        pagepath={location.pathname}
      />
      <div className="works" id="pagetop">
        <div className="hero partsGrid">
          <div className="hero-placeholder" />
          <div className="hero-main">
            <StaticImage
              src="../images/work.jpg"
              alt=""
              placeholder="blurred"
              layout="fullWidth"
            />
          </div>
          <div className="title">
            <h1>WORKS</h1>
            <p>これまでの制作物</p>
          </div>
        </div>
        <main className="main partsGrid">
          <div className="grid12">
            <section className="work layout">
              <h2 className="sr-only">各作品</h2>
              {data.allMicrocmsPortfolio.edges.map(({ node }) => (
                <article className="card grid12">
                  <figure>
                    <Imgix
                      src={node.eyecatch.url}
                      sizes="100% 100%"
                      htmlAttributes={{
                        alt: "",
                      }}
                    />
                  </figure>
                  <div className="text">
                    <div className="text-inner">
                      <h3>{node.title}</h3>
                      <p>{node.description}</p>
                      <ul className="tag">
                        {node.category.map(cat => (
                          <li className={cat.categorySlug} key={cat.id}>
                            <Link to={`/cat/${cat.categorySlug}/`}>
                              <span>{cat.category}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ul className="links">
                      <li className="github">
                        <a
                          href={node.githuburl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                          <span>{node.githuburl}</span>
                        </a>
                      </li>
                      <li className="link">
                        <a href={node.portfoliourl}>{node.portfoliourl}</a>
                      </li>
                    </ul>
                  </div>
                </article>
              ))}

              <ul className="pagenation">
                {!pageContext.isFirst && (
                  <li className="prev">
                    <Link
                      to={
                        pageContext.currentPage === 2
                          ? `/works`
                          : `/works/${pageContext.currentPage - 1}/`
                      }
                      rel="prev"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                      <span>前のページ</span>
                    </Link>
                  </li>
                )}

                {!pageContext.isLast && (
                  <li className="next">
                    <Link
                      to={`/works/${pageContext.currentPage + 1}/`}
                      rel="next"
                    >
                      <span>次のページ</span>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                  </li>
                )}
              </ul>
            </section>
          </div>
        </main>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMicrocmsPortfolio(
      sort: { order: DESC, fields: publishDate }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          slug
          title
          portfoliourl
          githuburl
          description
          category {
            category
            categorySlug
            id
          }
          eyecatch {
            url
          }
        }
      }
    }
  }
`
