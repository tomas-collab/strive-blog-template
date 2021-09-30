import { useState } from "react"
import React from 'react'
import {Form,Button} from 'react-bootstrap'
import Axios from 'axios'

const LogIn=()=>{


    const [registration, setRegistration] = useState({email:'',password:''})
    const [shopComplete, setShopComplete] = useState(false)

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
               body:JSON.stringify({
                   email:registration.email,
                  password:registration.password})
           })
           if(response.ok){
               const data = await response.json()
               console.log(data)

           }else{
               console.log('bad request')
           }
    
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
         <Form onSubmit={handleSubmit}>
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
         </>
    )
}

export default LogIn