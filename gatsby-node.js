const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const projectTemplate = path.resolve('src/templates/project.js')
  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            thumbnail {
              childImageSharp {
                sizes(
                  maxWidth: 850
                  quality: 90
                  traceSVG: { color: "#f3f3f3" }
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }`)
    .then(res => {
      if (res.errors) {
        return Promise.reject(res.errors)
      }

      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: projectTemplate
        })
      })
    })
}