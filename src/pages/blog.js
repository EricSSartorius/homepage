import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <h1>Blog</h1>
    <p>Writing stuff</p>

    <Link to="/about/">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/contact/">Contact</Link>

    {/* <h2>Index</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <Link
        key={post.node.id}
        to={post.node.frontmatter.path}>
        {post.node.frontmatter.title}
      </Link>
    ))} */}

    <h2>WP</h2>
    {data.allWordpressPost.edges.map(post => (
      <Link
        key={post.node.id}
        to={post.node.slug}>
        <h1>{post.node.title}</h1>
        <h3>{post.node.date}</h3>
        <p>{post.node.content}</p>
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

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(limit: 10) {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//           }
//         }
//       }
//     }
//   }
// `

export default BlogPage
