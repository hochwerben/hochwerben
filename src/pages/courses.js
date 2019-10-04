import React from "react"
import Layout from "../components/layout"
import Courses from "../components/Courses/Courses"
import SEO from "../components/SEO"

const courses = () => {
  return (
    <Layout>
      <SEO title="Courses" />
      <Courses />
    </Layout>
  )
}

export default courses
