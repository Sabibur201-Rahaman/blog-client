import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";
const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const getBlogDetail = async () => {
    try {
        const{data}=await axios.get(`http://localhost:8080/api/v1/blog/getBlog/${id}`)
        if(data?.success){
            setBlog(data?.blog)
            setInputs({
                title:data?.blog.title,
                description:data?.blog.description,
                image:data?.blog.image
            })
        }
    } catch (err) {
console.log(err)
    }
  };
  useEffect(()=>{
getBlogDetail()
  },[])
  console.log(blog)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:8080/api/v1/blog/updateBlog/${id}`,
        {
          title: inputs.title,
          description: inputs.description,
          image: inputs.image,
          user:id
        },
        
      );
      if (data?.success) {
        toast.success("Blog updated");
        navigate("/my-blogs");
      } else {
        // Handle unsuccessful response from the server
        toast.error("Failed to update blog");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error updating blog:", error);
      toast.error("An error occurred while updating the blog");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          width={"50%"}
          border={3}
          borderRadius={10}
          padding={3}
          margin="auto"
          boxShadow={"10px 10px 20px #ccc"}
          display="flex"
          flexDirection={"column"}
          marginTop="30px"
        >
          <Typography
            variant="h2"
            textAlign={"center"}
            fontWeight="bold"
            padding={3}
            color="gray"
          >
            Edit The Blog
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Description
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Image URL
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button type="submit" color="primary" variant="contained">
            Update
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default BlogDetails;
