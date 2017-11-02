import React from 'react'
import Link from 'gatsby-link'

const WorkTransPage = ({ data }) => (
  <div className="work">
    <div className="work-item">
      <h3>Translation/Subtitling</h3>
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
  query TransQuery {
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

export default WorkTransPage
