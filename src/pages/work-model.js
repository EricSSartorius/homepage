import React from 'react'
import Link from 'gatsby-link'

const WorkModelPage = ({ data }) => (
  <div className="work">
    <div className="work-item">
      <h3>Modeling</h3>
      {data.allMarkdownRemark.edges.map(post => (
        <Link
          key={post.node.id}
          to={post.node.frontmatter.path} >
          {post.node.frontmatter.title}
        </Link >
      ))}
    </div>
  </div>
)

export const pageQuery = graphql`
  query ModelQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

export default WorkModelPage
