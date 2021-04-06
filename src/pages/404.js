import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <main className="error-page">
        <h1>404</h1>
        <h2>Page not found</h2>
      </main>
    </Layout>
  )
}

export default Error
