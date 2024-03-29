import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from '../components/Global/BackgroundSection'
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'
import Products from '../components/Home/Products'
import Contact from '../components/Home/Contact'

const IndexPage = ({data}) => (
  
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
      img={data.img.childImageSharp.fluid} 
      title1="Anna & Emma" 
      title2="kahvi roastery"
      styleClass="anna-ja-emma"
    />
    <Info/>
    <Menu items={data.menu}/>
    <Products />
    <Contact />
  </Layout>
);

export const query = graphql `
{
  img: file(relativePath: {eq: "default-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu:allContentfulCofeeItem {
    edges {
      node {
        id
        title
        price
        category
      }
    }
  }
}
`

export default IndexPage;
