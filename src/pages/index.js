import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>School Blog</h1>
      <p>
        Anchor regular link <a href="/kontakt">kontakt</a>
      </p>
      <p>
        Gatsby link <Link to="/kontakt"> kontakt</Link>
      </p>
    </Layout>
  )
}

export default HomePage
