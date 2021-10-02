import { useState } from "react"
import React from 'react'
import {Form,Button} from 'react-bootstrap'
import { Redirect } from "react-router-dom"

const LogIn=()=>{


    const [registration, setRegistration] = useState({email:'',password:''})
    const [shopComplete, setShopComplete] = useState(false)
    const [redirect, setRedirect] = useState(false)

 const handleInput = (key,value)=>{
          setRegistration(
             { ...registration,
            [key]:value}
            )
 }
 const handleSubmit =async(e)=>{
       e.preventDefault()
   
  
         const response = await fetch('http://localhost:3000/authors/login',{
               method:'POST',
               headers:{"Content-Type": "application/json"},
            //    credentials:'include',
               body:JSON.stringify({
                   email:registration.email,
                   password:registration.password})
           })
           if(response.ok){
               const data = await response.json()
               localStorage.setItem('data',"Bearer " + (data.accessToken))
                
                console.log('token',data.accessToken)
                setRedirect(true)
           }else{
               console.log('bad request')
           }
    
 }
 if(redirect){
     return <Redirect to='/Home'/>
 }

 const isButtonDisabled = ()=>{
    let isDisabled = true
     if(registration.password)
     {
         isDisabled=false
     }
     return isDisabled
 }
    return(
         <>
             
         <Form className='logIn' onSubmit={handleSubmit}>
             <h4>sign in with email</h4>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>handleInput('email',e.target.value)}  value={registration.email}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>handleInput('password',e.target.value)}  value={registration.password}/>
                </Form.Group>
                <Button disabled={isButtonDisabled()} variant="primary" type="submit">
                    Submit
                </Button>
        </Form>  
        {/* <a href="http://localhost:3000/authors/googleLogin"><button>google logIn</button></a> */}
         </>
    )
}

export default LogIn