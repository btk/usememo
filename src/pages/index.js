import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Narwhal from "../components/narwhal"
import SS from "../components/ss"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="screen">
      <div className="screenInner">
        <div>
          <img src={require("./logo.svg")} className="logo"/>
          <h1>Take <br/>
              Smarter notes <br/>
              with <span>GitHub Gists</span>.</h1>
          <p className="subtext">Own your own private data, store it with <br/>Github's gists and access it from anywhere, anytime. <br/></p>

          <div style={{display: "flex"}}>
            <a href="https://app.usememo.com/">
              <div className="button active">
                <span>Use on Browser</span>
              </div>
            </a>

            <div className="button passive">
              <span>Get on MacOS</span>
            </div>
          </div>
        </div>
        <Narwhal/>
      </div>

      <div style={{width: "100%"}}>
        <svg width="32px" viewBox="0 0 247 390" className="wheelCarrier">
        	<path id="wheel" d="M123.359,79.775l0,72.843" className="wheelPart1"/>
        	<path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" className="wheelPart2"/>
        </svg>
      </div>
    </div>

    <div style={{width: "100%", paddingBottom: 100}}>
      <SS/>
    </div>


    <h2>Every paragraph<br/>
        full of <span>super powers</span>.</h2>

    <div className="superpowers">
      <div className="superpower active">
        <p>An interactive Markdown experience with image previews, links and autoformatters.</p>
      </div>
      <div className="superpower">
        <p>Get insight into every paragraph with addons like; write-good, previews and conversion.</p>
      </div>
      <div className="superpower">
        <p>Have all your note sheets in one place, in an easily searchable and accessable form.</p>
      </div>
    </div>

    <p>Enjoy the crowdsourced UX capabilities of <a href="https://github.com/btk/memo">open source</a> note taking app memo.</p>
  </Layout>
)

export default IndexPage
