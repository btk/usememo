import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Footer = () => {

  return (
    <div className="footer">
      2020 GNU GPLv3 License &middot; Memo App<br/>
      <Link to={"/privacypolicy/"}>Privacy Policy</Link>

      <div className="socials">
        <a href="https://github.com/btk/memo" target="_blank"><img src={require("./github.svg")} alt={"social-github"}/></a>
        <a href="https://twitter.com/usememo_app" target="_blank"><img src={require("./twitter.svg")} alt={"social-twitter"}/></a>
      </div>
    </div>
  )
}

export default Footer
