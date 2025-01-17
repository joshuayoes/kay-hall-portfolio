import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { imageUrlFor } from "../lib/image-url"
import { buildImageObj } from "../lib/helpers"

function SEO({ description, lang, meta, keywords, title, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || (data.siteSettings && data.siteSettings.description) || ""
        const siteTitle = title || (data.siteSettings && data.siteSettings.title) || ""
        const siteAuthor = (data.siteSettings && data.siteSettings.author) || ""
        const imageSource = image || (data.siteSettings && data.siteSettings.hero)
        const metaImage = imageUrlFor(buildImageObj(imageSource))
          .size(1200, 627)
          .fit("crop")
          .crop("top")
          .url()

        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={title === siteTitle ? "%s" : `%s | ${siteTitle}`}
            meta={[
              {
                name: "description",
                content: metaDescription
              },
              {
                property: "og:title",
                content: title
              },
              {
                property: "og:description",
                content: metaDescription
              },
              {
                property: "og:type",
                content: "website"
              },
              {
                property: "og:image",
                content: metaImage
              },
              {
                name: "twitter:card",
                content: "summary"
              },
              {
                name: "twitter:creator",
                content: siteAuthor
              },
              {
                name: "twitter:title",
                content: title
              },
              {
                name: "twitter:description",
                content: metaDescription
              }
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                      name: "keywords",
                      content: keywords.join(", ")
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    siteSettings: sanitySiteSettings(_id: { eq: "siteSettings" }) {
      title
      description
      keywords
      author
      hero {
        asset {
          _id
          url
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
  }
`
