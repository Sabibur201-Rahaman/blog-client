import React, { useState } from 'react'
import { Form, useNavigate } from "react-router-dom";
import axios from 'axios'
import{Box,Typography,TextField,Button}from '@mui/material'
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import {useDispatch } from 'react-redux';
import { authActions } from '../../redux/store';
const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const[inputs,setInputs]=useState({
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
const {data}=await axios.post ('http://localhost:8080/api/v1/user/login',{
  email:inputs.email,
  password:inputs.password
})
if(data.success){
  dispatch(authActions.Login())
  toast.success('user Successfully logedIn')
  navigate('/')
}else{
  toast.error('Already Registered?please Login')
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
    Login
    </Typography>
    
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
    color='primary' onClick={()=>navigate('/')}>Already Registered?please Login</Button>
    </Box>
    </form>
    <Toaster position="Bottom-center"/>

    </>
  )
}

export default Login
