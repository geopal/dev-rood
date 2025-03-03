import * as React from 'react'
import Layout from '../components/layout'
  
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <><meta charset="UTF-8" /><title>About Page</title></>

export default AboutPage