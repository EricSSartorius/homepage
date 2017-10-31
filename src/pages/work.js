import React from 'react'
import Link from 'gatsby-link'

const WorkPage = ({ data }) => (
  <div className="work">
    {data.allMarkdownRemark.edges.map(post => (
      <Link
        key={post.node.id}
        to={post.node.frontmatter.path} >
        {post.node.frontmatter.title}
      </Link >
    ))}
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
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

export default WorkPage
