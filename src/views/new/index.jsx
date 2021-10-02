import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
import { useState } from "react";



const NewBlogPost =()=>{
 
const [collection, setCollection] = useState({title:'',category:'',cover:''})
  const handleChange = (key,value)=> {
    setCollection({ 
      ...collection,
      [key]:value
     });
  }
const submitBlog = async(e)=>{
  e.preventDefault()
  try {
    let response = await fetch('http://localhost:3000/blogPosts',{
      method:'POST',
      body:JSON.stringify(
        collection,
        
        ),
      headers:{"Content-Type":'application/json'}
    })
    if(response.ok){
      alert('comment added')
    }else{
      alert('error')
    }
  } catch (error) {
    console.log(error)
  }
}
    return (
      <Container className="new-blog-container">
        <Form className="mt-5" onSubmit={submitBlog}>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control size="lg" 
            placeholder="title"
            value={collection.title}
            onChange={(e)=>{handleChange('title',e.target.value)}} />
          </Form.Group>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>cover</Form.Label>
            <Form.Control size="lg" 
            placeholder="cover"
            value={collection.cover}
            onChange={(e)=>{handleChange('cover',e.target.value)}} />
          </Form.Group>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control size="lg" as="select"
            value={collection.category}
            onChange={(e)=>{handleChange('category',e.target.value)}}
            >
              <option>Category1</option>
              <option>Category2</option>
              <option>Category3</option>
              <option>Category4</option>
              <option>Category5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="blog-content" className="mt-3">
            <Form.Label>Blog Content</Form.Label>
            <ReactQuill
              // value={text}
              onChange={handleChange}
              className="new-blog-content"
            />
          </Form.Group>
      
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );

}

export default  NewBlogPost



