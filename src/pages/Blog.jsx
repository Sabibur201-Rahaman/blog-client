import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./../components/BlogCard";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const getAllBlocks = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/blog/allBlog"
      );
      console.log(data);
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log("error here::::", error);
    }
  };
  useEffect(() => {
    getAllBlocks();
  }, []);
  return <div>{blogs && blogs.map((blog) => <BlogCard  
  title={blog.title}
  description={blog.description}
  image={blog.image}
  userName={blog.user.userName}
  time={blog.createdAt}
  />)}</div>;
};

export default Blog;
