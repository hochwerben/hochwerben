import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../../css/projects.module.css"
import Project from "./Project"
import Title from "../Title"

// projects center
const query = graphql`
  query MyQuery {
    allContentfulProjects(sort: { order: DESC, fields: createdAt }) {
      nodes {
        completeProject
        starterFiles
        title
        url
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        api
      }
    }
  }
`

const Projects = () => {
  const {
    allContentfulProjects: { nodes: projects },
  } = useStaticQuery(query)

  return (
    <section className={styles.projects}>
      <Title title="latest" subtitle="projects"></Title>
      <div className={styles.center}>
        {projects.map(item => {
          return <Project key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Projects
