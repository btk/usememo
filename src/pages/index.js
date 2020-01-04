import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Narwhal from "../components/narwhal"
import SS from "../components/ss"
import Superpower from "../components/superpower"
import SEO from "../components/seo"

class IndexPage extends Component {
  state = {
    power: 1
  }

  render(){
    return (
      <Layout>
        <div className="screen">
          <div className="screenInner">
            <div className="mottoCarrier">
              <img src={require("./logo.svg")} className="logo" alt="logo"/>
              <h1>Take <br/>
                  Smarter notes <br/>
                  with <span>GitHub Gists</span>.</h1>
              <p className="subtext">Own your own private data, store it with <br/>Github's gists and access it from anywhere, anytime. <br/></p>

              <div className="buttonCarrier">
                <a href="https://app.usememo.com/">
                  <div className="button active">
                    <span>Use in Browser</span>
                  </div>
                </a>

                <Link to={`/download/`}>
                  <div className="button passive">
                    <span>Download</span>
                  </div>
                </Link>
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


        <div className="superpowerCarrier">
          <div className="superpowers">
            <div className={this.state.power === 1 ? "superpower active" : "superpower"} onClick={() => this.setState({power: 1})}>
              <p>An interactive Markdown experience with image previews, links and autoformatters.</p>
            </div>
            <div className={this.state.power === 2 ? "superpower active" : "superpower"} onClick={() => this.setState({power: 2})}>
              <p>Get insight into every paragraph with addons like; write-good, previews and conversion.</p>
            </div>
            <div className={this.state.power === 3 ? "superpower active" : "superpower"} onClick={() => this.setState({power: 3})}>
              <p>Have all your note sheets in one place, in an easily searchable and accessable form.</p>
            </div>
          </div>
          <Superpower power={this.state.power}/>
        </div>



        <h2>Contribute to Memo,<br/>
            it is <span>open source</span>.</h2>

        <div className="opensource">
          <p>Enjoy the crowdsourced UX capabilities of <a href="https://github.com/btk/memo" target="_blank">open source</a> note taking app memo.</p>
          <ul>
            <li>Did you face a bug, <a href="https://github.com/btk/memo/issues" target="_blank">file an issue to tell us</a>, or make a pull request that fixes it.</li>
            <li>Do you think Memo should have "that" feature, <a href="https://github.com/btk/memo/issues" target="_blank">file an issue</a>, or add it yourself.</li>
            <li>Would you like to make an addon for Memo? <a href="https://github.com/btk/memo#contributing" target="_blank">Read this tutorial</a> and make a pull request.</li>
          </ul>
        </div>


        <div className="producthunt" dangerouslySetInnerHTML={{__html: `
          <a href="https://www.producthunt.com/posts/memo-plain-smart-notes?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-memo-plain-smart-notes" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=179543&theme=light" alt="Memo - Plain & Smart Notes - Take smarter notes with GitHub Gists, anywhere. | Product Hunt Embed" style="width: 250px; height: 54px;" width="250px" height="54px" /></a>
        `}}></div>

        <div className="footer">
          2020 GNU GPLv3 License &middot; Memo App
        </div>

        <SEO
          description={`Memo allows you to take smarter notes with GitHub Gists, learn how you can take better notes.`}
          lang={`en`}
          title={"home"}
        />
      </Layout>
    )
  }
}

export default IndexPage
