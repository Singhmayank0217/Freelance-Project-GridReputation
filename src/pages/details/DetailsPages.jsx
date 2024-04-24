import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import Blog1 from "../allblogs/blog1";
import Blog2 from "../allblogs/blog2";
import Blog3 from "../allblogs/blog3";
import Blog4 from "../allblogs/blog4";
import Blog5 from "../allblogs/blog5";
import Blog6 from "../allblogs/blog6";
import Blog7 from "../allblogs/blog7";
import Blog8 from "../allblogs/blog8";
import Blog9 from "../allblogs/blog9";
import Blog10 from "../allblogs/blog10";
import Blog11 from "../allblogs/blog11";
import Blog12 from "../allblogs/blog12";
import Blog13 from "../allblogs/blog13";
import Blog14 from "../allblogs/blog14";
import { blog } from "../../assets/data/data";
import "./details.css";
import Layout from "../../components/layout/Layout";

export const DetailsPages = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState(null); 

  useEffect(() => {
    let selectedBlog = blog.find((blog) => blog.id === parseInt(id)); // Changed 'blogs' to 'blog'
    if (selectedBlog) {
      setBlogDetails(selectedBlog); // Changed 'setBlogs' to 'setBlogDetails'
    }
  }, [id]); // Removed 'blogs' from the dependency array since it's not needed here

  return (
    <Layout>
      {blogDetails && (
        <section className="singlePage">
          <div className="container">
            <div className="left">
              <img src={blogDetails.cover} alt="" /> {/* Changed 'blogs.cover' to 'blogDetails.cover' */}
            </div>
            <div className="right">
              <h1 className="title">{blogDetails.title}</h1>
              <p className="desc">{blogDetails.desc}</p> 
            </div>
            {/* Conditionally render content component based on blog ID */}
            {id === "1" && <Blog1 />}
            {id === "2" && <Blog2 />}
            {id === "3" && <Blog3 />}
            {id === "4" && <Blog4 />}
            {id === "5" && <Blog5 />}
            {id === "6" && <Blog6 />}
            {id === "7" && <Blog7 />}
            {id === "8" && <Blog8 />}
            {id === "9" && <Blog9 />}
            {id === "10" && <Blog10 />}
            {id === "11" && <Blog11/>}
            {id === "12" && <Blog12/>}
            {id === "13" && <Blog13/>}
            {id === "14" && <Blog14/>}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default DetailsPages;