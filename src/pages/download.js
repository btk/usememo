import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Narwhal from "../components/narwhal"
import SS from "../components/ss"
import Superpower from "../components/superpower"
import SEO from "../components/seo"
import Footer from '../components/footer'


const windowsLink = "https://usememo.com/MemoSetup.exe";
const linuxLink = "https://usememo.com/MemoSetup.AppImage";
const macosLink = "https://usememo.com/MemoSetup.dmg";

class IndexPage extends Component {
  state = {
    power: 1
  }

  componentDidMount(){
    if(typeof window !== "undefined"){
      window.location.href = this.getPlatformLink();
    }
  }

  getPlatformLink(){
    if(typeof window !== "undefined"){
      if(window.navigator.platform.toLowerCase() == "win32"){
        return windowsLink;
      }else if(window.navigator.platform.toLowerCase().includes("linux")){
        return linuxLink;
      }else{
        return macosLink;
      }
    }
  }

  getOtherPlatformLink(){
    if(typeof window !== "undefined"){
      if(window.navigator.platform.toLowerCase() == "win32"){
        return macosLink;
      }else{
        return windowsLink;
      }
    }
  }

  getOtherPlatformText(){
    if(typeof window !== "undefined"){
      if(window.navigator.platform.toLowerCase() == "win32"){
        return "MacOS";
      }else{
        return "Windows";
      }
    }
  }

  render(){
    return (
      <Layout>
        <div className="goBackButton">
          <Link to={`/`}>
            <span>← Go Back</span>
          </Link>
        </div>
        <img src={require("./logo.svg")} className="logoDownloadPage"/>

        <h2>Thanks for downloading,<br/>
            <span>Memo App</span>.</h2>

        <div className="opensource">
          <p>Please wait for a while, download should start any second. If it didn't please <a href={this.getPlatformLink()}>click here!</a></p>
          <ul>
            <li>If you were looking for the {this.getOtherPlatformText()} app please <a href={this.getOtherPlatformLink()}>click here!</a></li>
            <li>Did you face a bug, <a href="https://github.com/btk/memo/issues" target="_blank">file an issue to tell us</a>, or make a pull request that fixes it.</li>
          </ul>
        </div>

        <Footer/>


        <SEO
          description={`You can download note taking app Memo for your desktop devices.`}
          lang={`en`}
          title={`Download`}
        />
      </Layout>
    )
  }
}

export default IndexPage
