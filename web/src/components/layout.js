import React from "react"
import Header from "./header"

import "../styles/layout.css"
import styles from "./layout.module.css"

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, resumeUrl }) => (
  <>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      resumeUrl={resumeUrl}
    />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built by{" "}
          <a href="https://joshuayoes.com">Joshua Yoes</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
