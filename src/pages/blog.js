import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <h1>Blog</h1>
    {data.allWordpressPost.edges.map(post => (
      <Link
        key={post.node.id}
        to={post.node.slug}>
        <h1>{post.node.title}</h1>
        <h3>{post.node.date}</h3>
        <p>{post.node.excerpt}</p>
      </Link>
    ))}
  </div>
)

export const postQuery = graphql` 
  query IndexQuery {
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          date
          modified
        }
      }
    }
  }
`

export default BlogPage
