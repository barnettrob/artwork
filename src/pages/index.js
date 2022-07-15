import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiArt {
        edges {
          node {
            Title
            Description
            id
            Artwork {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
            }
          }
        }
      }
    }
  `)

  const artMulitple = data.allStrapiArt.edges

  return (
    <Layout>
      <div className="home">
        {artMulitple.map(art => {
          return (
            <div className="art" key={art.node.id}>
              <div className="title">
                {art.node.Title}
              </div>
              <div className="description">
                {art.node.Description}
              </div>
              <div className="picture">
                <GatsbyImage image={getImage(art.node.Artwork.localFile)} alt={art.node.Title} />
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
