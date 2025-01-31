import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to my Gatsby site!">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        // src='https://www.lonestardigital.com/EOS_D30/Sample_Pix/D30_Img_3771(400x400_Crop).jpg'
        src='../images/icon.png'
        alt='Moon'
        />
    </Layout>
  )
}

export const Head = () => <><meta charset="UTF-8" /><title>Home Page</title></>

export default IndexPage