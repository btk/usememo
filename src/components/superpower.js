import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({power}) => {
  const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "light.png" }) {
        childImageSharp {
          fluid(maxWidth: 820, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "2.png" }) {
        childImageSharp {
          fluid(maxWidth: 820, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      three: file(relativePath: { eq: "3.png" }) {
        childImageSharp {
          fluid(maxWidth: 820, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="superpowerScreenShot">
      {power === 1 &&
        <Img fluid={data.one.childImageSharp.fluid} />
      }
      {power === 2 &&
        <Img fluid={data.two.childImageSharp.fluid} />
      }
      {power === 3 &&
        <Img fluid={data.three.childImageSharp.fluid} />
      }
    </div>
  )
}

export default Image
