import React, { useState } from 'react'
import { Form, useNavigate } from "react-router-dom";
import axios from 'axios'
import{Box,Typography,TextField,Button}from '@mui/material'
const Register = () => {
  const navigate=useNavigate()
  const[inputs,setInputs]=useState({
    name:'',
    email:'',
    password:''
  })
  const handleChange=(e)=>{
setInputs((prevState)=>({
  ...prevState,
  [e.target.name]:e.target.value
}))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
const {data}=await axios.post ('http://localhost:8080/api/v1/user/register',{
  userName:inputs.name,
  email:inputs.email,
  password:inputs.password
})
if(data.success){
  alert('user Successfully registered')
  navigate('/login')
}
    }catch(error){
console.log(error)
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <Box
      maxWidth={400}
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      margin='auto'
      marginTop={5}
      boxShadow='10px 10px 20px #ccc'
      padding={3}
      borderRadius={5}
    >
    <Typography variant='h4'>
    Register
    </Typography>
    <TextField placeholder='name'
    name='name'
    type={'text'}
    margin='normal'
    required
    onChange={handleChange}
    />
    <TextField placeholder='email'
    name='email'
    type={'email'}
    margin='normal'
    required
    onChange={handleChange}

    />
    <TextField placeholder='password'
    name='password'
    type={'password'}
    margin='normal'
    required
    onChange={handleChange}

    />
    <Button type="submit"
    sx={{borderRadius:3,marginTop:3}}
    color='primary'
    variant='contained'
    >Submit</Button>

    <Button type="submit"
    sx={{borderRadius:3,marginTop:3}}
    color='primary' onClick={()=>navigate('/login')}>Already Registered?please Login</Button>
    </Box>
    </form>
    </>
  )
}

export default Register
