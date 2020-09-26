import React from "react"
import Icon from "./icon"
import { cn } from "../lib/helpers"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./header.module.css"

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, resumeUrl }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <AniLink paintDrip color="black" to="/">
          {siteTitle}
        </AniLink>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <a href={resumeUrl}>Resume</a>
          </li>
          <li>
            <AniLink paintDrip color="black" to="/blog/">
              Blog
            </AniLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
