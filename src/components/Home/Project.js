import React from "react"
import Image from "gatsby-image"
import styles from "../../css/single-project.module.css"
import { FaGithubSquare } from "react-icons/fa"
const Project = ({ image, title, url, starterFiles, finishedFiles, api }) => {
  const mainImage = image.childImageSharp.fluid
  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} alt={title} className={styles.img}></Image>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.url}
        >
          finished project
        </a>
      </div>
      <div className={styles.footer}>
        <h3>{title}</h3>
        <div className={styles.github}>
          <FaGithubSquare className="github-icon icon"></FaGithubSquare>
          {api ? (
            <a href={api} target="_blank" rel="noopener noreferrer">
              api
            </a>
          ) : null}
          <a href={starterFiles} target="_blank" rel="noopener noreferrer">
            starter files
          </a>
          <a href={finishedFiles} target="_blank" rel="noopener noreferrer">
            complete project
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
