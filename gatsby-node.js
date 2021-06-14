const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogresult = await graphql(`
    query {
      allMicrocmsPortfolio(sort: { order: DESC, fields: publishDate }) {
        edges {
          node {
            id
            slug
          }
        }
        group(field: category___categorySlug) {
          fieldValue
          totalCount
        }
      }
      allMicrocmsCategory {
        nodes {
          categoryId
          categorySlug
          category
        }
      }
    }
  `)
  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
    return
  }
  const blogPostsPerPage = 3
  const blogPosts = blogresult.data.allMicrocmsPortfolio.edges.length
  const blogPages = Math.ceil(blogPosts / blogPostsPerPage)
  Array.from({ length: blogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/works/` : `/works/${i + 1}/`,
      component: path.resolve("./src/templates/works-template.js"),
      context: {
        skip: blogPostsPerPage * i,
        limit: blogPostsPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === blogPages,
      },
    })
  })
  blogresult.data.allMicrocmsPortfolio.group.forEach(node => {
    const catPostsPerPage = 3
    const catPosts = node.totalCount
    const catPages = Math.ceil(catPosts / catPostsPerPage)
    Array.from({ length: catPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/cat/${node.fieldValue}/`
            : `/cat/${node.fieldValue}/${i + 1}/`,
        component: path.resolve(`./src/templates/cat-template.js`),
        context: {
          catid: blogresult.data.allMicrocmsCategory.nodes.find(
            n => n.categorySlug === node.fieldValue
          ).categoryId,
          catname: blogresult.data.allMicrocmsCategory.nodes.find(
            n => n.categorySlug === node.fieldValue
          ).category,
          catslug: node.fieldValue,
          skip: catPostsPerPage * i,
          limit: catPostsPerPage,
          currentPage: i + 1,
          isFirst: i + 1 === 1,
          isLast: i + 1 === catPages,
        },
      })
    })
  })
}
