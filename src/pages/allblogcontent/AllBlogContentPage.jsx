import React from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import Layout from "../../components/layout/Layout"
import "../../../src/mainblog.css"

export const AllBlogContentPage = () => {
  return (
    <>
      <Layout>
        <Category />
        <Card />
      </Layout>
      {/*  <Slider />*/}
    </>
  )
}

export default AllBlogContentPage;