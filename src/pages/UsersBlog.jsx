import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const UsersBlog = () => {
  const [blogs, setBlogs] = useState([]);

  
    const getUserBlogs = async () => {
      try {
        const id = localStorage.getItem("userId");
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/blog/userBlog/${id}`
        );
        if (data?.success) {
          setBlogs(data?.userBlog.blogs);
        }
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {
      getUserBlogs();

  }, []); // Empty dependency array means this effect will only run once after initial render

  return (
    <div>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            userName={blog.user.userName}
            time={blog.createdAt}
          />
          
        ))
        
      ) : (
        <h1>You Havent Created a blog</h1>
      )}{" "}
    </div>
  );
};

export default UsersBlog;
