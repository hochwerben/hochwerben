import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
const query = graphql`
  query {
    allStrapiCourse {
      nodes {
        title
        url
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Courses = () => {
  const {
    allStrapiCourse: { nodes: courses },
  } = useStaticQuery(query)

  return (
    <div className="courses">
      {courses.map(item => {
        const { title, url } = item
        const image = item.image.childImageSharp.fluid
        return (
          <div key={item.id} style={{ width: "200px" }}>
            <Image fluid={image} alt="course image"></Image>
            <h6>{title}</h6>
            <h6>{url}</h6>
          </div>
        )
      })}
    </div>
  )
}

export default Courses
