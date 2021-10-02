import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import { useState,useEffect } from "react";
import jwt_decode from "jwt-decode";


const  BlogList=()=> {
const [posts, setPosts] = useState([])

let token = localStorage.getItem("data")
const author = jwt_decode(token)
useEffect(() => {
 fetchData()

}, [])
  const fetchData =async () => {
    const response = await fetch(`http://localhost:3000/blogPosts`, {
               headers:{"Content-Type": "application/json",
                      "Authorization": `${token}`
                    },

              //  credentials:'include',
    })
    if(response.ok){
      const res = await response.json()
      console.log(res)
        setPosts(res)
    }
  }
  
    return (
      <Row>
        {posts && posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <h1>{post.title}</h1>
           
            <BlogItem key={post._id} {...post} />
          </Col>
        ))}
      </Row>
    );
  
}


export default BlogList
