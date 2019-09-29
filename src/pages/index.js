import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import Courses from "../components/Home/Courses"
const IndexPage = () => (
  <Layout>
    <HomeBanner></HomeBanner>
    <Courses></Courses>
  </Layout>
)

export default IndexPage
