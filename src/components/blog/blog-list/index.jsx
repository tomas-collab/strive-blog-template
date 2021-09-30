import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";
export default class BlogList extends Component {
  state = {posts: []}
  componentDidMount =async () => {
    const response = await fetch("http://localhost:3001/authors", {
    })
    if(response.ok){
      const res = await response.json()
      console.log(res)
      this.setState({
        posts: res
      })
    }
  }
  render() {
    return (
      <Row>
        {this.state.posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}



