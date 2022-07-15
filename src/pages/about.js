import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiAbout {
        Description {
          data {
            Description
          }
        }
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `)

  const aboutImage = getImage(data.strapiAbout.Image.localFile)

  return (
    <Layout>
      <div className="about">
        <div className="description">
          {data.strapiAbout.Description.data.Description}
        </div>
        <div className="picture">
          <GatsbyImage image={aboutImage} alt="calista" />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage