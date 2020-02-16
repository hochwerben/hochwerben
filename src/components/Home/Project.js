import React from "react"
import Image from "gatsby-image"
import styles from "../../css/single-project.module.css"
import { FaGithubSquare } from "react-icons/fa"
const Project = ({
  image,
  title,
  url,
  starterFiles,
  completeProject,
  api,
  info: { info },
  technology,
}) => {
  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} alt={title} className={styles.img}></Image>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.url}
          >
            finished project
          </a>
        ) : null}
      </div>
      <div className={styles.footer}>
        <h3>{title}</h3>
        <p>{info}</p>

        <div className={styles.github}>
          <FaGithubSquare className="github-icon icon"></FaGithubSquare>
          {api ? (
            <a href={api} target="_blank" rel="noopener noreferrer">
              api
            </a>
          ) : null}
          {starterFiles && (
            <a href={starterFiles} target="_blank" rel="noopener noreferrer">
              starter files
            </a>
          )}
          {completeProject && (
            <a href={completeProject} target="_blank" rel="noopener noreferrer">
              source code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default Project
