import React from 'react'
import{Box,Typography,TextField,Button}from '@mui/material'
const Register = () => {
  return (
    <>
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
    <TextField/>
    <TextField/>
    <TextField/>
    <Button>Submit</Button>
    <Button>Already Registered?please Login</Button>
    </Box>
    </>
  )
}

export default Register
