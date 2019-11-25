import React from "react"
import styles from "../../css/single-course.module.css"
import Image from "gatsby-image"
import logo from "../../images/addict-logo.svg"
const Course = ({ title, url, size, image }) => {
  return (
    <article className={styles.course}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} />
        <a
          className={styles.link}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          enroll
        </a>
      </div>
      <div className={styles.footer}>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>{size} hours</p>
        </div>
        <img src={logo} alt="coding addict logo" />
      </div>
    </article>
  )
}

export default Course
