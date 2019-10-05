import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="name">Kevin Fitzhenry</h1>
    <p className="tagline">Developer</p>
  </Layout>
)

export default IndexPage
