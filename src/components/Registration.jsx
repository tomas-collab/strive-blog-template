import { useState } from "react"
import React from  'react'
import {Form,Button, Navbar,Nav,Container} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { Redirect } from "react-router-dom"


const Registration=()=>{

    const [registration, setRegistration] = useState({name:'',surname:'',email:'',password:''})
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
           
  
         const response = await fetch('http://localhost:3000/authors/register',{
               method:'POST',
               headers:{"Content-Type": "application/json"},
               body:JSON.stringify({
                   email:registration.email,
                   password:registration.password,
                   surname:registration.surname,
                   name:registration.name
                    })
           })
           if(response.ok){
               const data = await response.json()
               console.log(data)

           }else{
               console.log('bad request')
           }
    setRedirect(true)
 }

 if(redirect){
     return  <Redirect to='/login'/>
 }

 const isButtonDisabled = ()=>{
    let isDisabled = true
    // registration.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])([a-zA-Z0-9]+)$/) &&  &&  registration.confirmPassword === registration.password
     if(registration.name.length>=2 && registration.surname.length>=2 && registration.password 
     ){
         isDisabled=false
     }
     return isDisabled
 }
    return(
         <>
             <Navbar bg="primary" variant="dark">
                        <Container>
                              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                              <Nav className="me-auto">
                                 <Nav.Link href="#home">Home</Nav.Link>
                                 <Nav.Link href="#features">Features</Nav.Link>
                                 <Nav.Link href="#features"> <Link style={{color:"black"}} to='/logIn'>logIn</Link></Nav.Link>
                                
                                 
                               </Nav>
                        </Container>
                </Navbar>
         
         <Form className='form' onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <h4>First time here</h4>
                     <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e)=>handleInput("name",e.target.value)} value={registration.name}/>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Enter surname" onChange={(e)=>handleInput('surname',e.target.value)}  value={registration.surname}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>handleInput('email',e.target.value)}  value={registration.email}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>handleInput('password',e.target.value)}  value={registration.password}/>
                </Form.Group>
                {/* <Form.Group className="mb-3">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>handleInput('confirmPassword',e.target.value)}   value={registration.confirmPassword}/>
                </Form.Group> */}
                <Button disabled={isButtonDisabled()} variant="primary" type="submit">
                    Submit
                </Button>
        </Form>  
         </>
    )
}

export default Registration