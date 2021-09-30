import React from "react";
import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import { BrowserRouter, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import Registration from "./components/Registration";

function App() {
  return (
    <BrowserRouter>
     
      <Route path="/" exact component={Home} />
      <Route path="/logIn" exact component={LogIn}/>
      <Route path="/registration" exact component={Registration}/>
      <Route path="/blog/:id" exact component={Blog} />
      <Route path="/new" exact component={NewBlogPost} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
