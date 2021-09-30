import { useState } from "react"
import {Form,Button} from 'react-bootstrap'
import Axios from 'axios'

const Registration=()=>{

    // const [registration, setRegistration] = useState({name:'',surname:'',email:'',password:'',confirmPassword:''})
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
    // registration.name.length>=2 && registration.surname.length>=2 && registration.password>=6 && registration.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])([a-zA-Z0-9]+)$/) && registration.confirmPassword === registration.password
     if(registration.password)
     {
         isDisabled=false
     }
     return isDisabled
 }
    return(
         <>
         <Form onSubmit={handleSubmit}>

                {/* <Form.Group className="mb-3">
                     <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e)=>handleInput("name",e.target.value)} value={registration.name}/>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Enter surname" onChange={(e)=>handleInput('surname',e.target.value)}  value={registration.surname}/>
                </Form.Group> */}
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