import {graphql, StaticQuery} from 'gatsby'
import React, {useState} from 'react'
import Layout from '../components/layout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
    }
    resumes: allSanityFileAsset(sort: {order: DESC, fields: _createdAt}, filter: {}) {
      edges {
        node {
          url
        }
      }
    }  
  }
`

function LayoutContainer (props) {
  const [showNav, setShowNav] = useState(false)
  function handleShowNav () {
    setShowNav(true)
  }
  function handleHideNav () {
    setShowNav(false)
  }
  return (
    <StaticQuery
      query={query}
      render={({site, resumes}) => {
        if (!site || !resumes) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          )
        }

        const latestResumeUrl = resumes.edges[0].node.url

        return (
          <Layout
            {...props}
            showNav={showNav}
            siteTitle={site.title}
            resumeUrl={latestResumeUrl}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
          />
        )
      }}
    />
  )
}

export default LayoutContainer
