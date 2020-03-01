import React from "react"
import styles from "../../css/single-course.module.css"
import Image from "gatsby-image"
const Course = ({ title, url, size, image }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <article className={styles.course}>
        <div className={styles.container}>
          <Image fluid={image.fluid} />
          <p>{size} hours</p>
        </div>
        <div className={styles.footer}>
          <h4>{title}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            ipsum quasi, pariatur ab magni eligendi?
          </p>
        </div>
      </article>
    </a>
  )
}

export default Course
