import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../../css/projects.module.css"
import Project from "./Project"
import Title from "../Title"

// projects center
const query = graphql`
  {
    allStrapiProject {
      nodes {
        finishedFiles
        slug
        starterFiles
        strapiId
        url
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
      }
    }
  }
`

const Projects = () => {
  const {
    allStrapiProject: { nodes: projects },
  } = useStaticQuery(query)

  return (
    <section className={styles.projects}>
      <Title title="latest" subtitle="projects"></Title>
      <div className={styles.center}>
        {projects.map(item => {
          return <Project key={item.strapiId} {...item} />
        })}
      </div>
    </section>
  )
}

export default Projects
