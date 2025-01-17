import React from "react"
import { graphql } from "gatsby"
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
  buildImageObj
} from "../lib/helpers"
import BlogPostPreviewList from "../components/blog-post-preview-list"
import Container from "../components/container"
import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/seo"
import Layout from "../containers/layout"
import styles from "../styles/index.module.css"
import { imageUrlFor } from "../lib/image-url"

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <section className={styles.hero}>
          <h1>{site.title}</h1>
          <p>{site.subtitle}</p>
          <img
            src={imageUrlFor(buildImageObj(site.hero))
              .width(600)
              .height(600)
              .crop("focalpoint")
              .url()}
            alt={site.title}
          />
        </section>

        {postNodes && (
          <BlogPostPreviewList
            title="Latest blog posts"
            nodes={postNodes}
            browseMoreHref="/blog/"
          />
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      subtitle
      description
      keywords
      hero {
        asset {
          _id
        }
        crop {
          _key
          _type
          left
          bottom
          right
          top
        }
        hotspot {
          y
          x
          width
          height
          _type
          _key
        }
      }
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`
