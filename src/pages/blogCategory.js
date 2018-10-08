import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../styles/blog.css';

class BlogCategory extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    let PostsUrl = "https://flore.local/wp-json/wp/v2/posts?_embed";
    fetch(PostsUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        posts: response
      })
    })
  }
  render() {
    let posts = this.state.posts.map((post, index) => {

      let postID = post.id
      
      if (post.better_featured_image === null) {
        return(
          <div className="col-sm" key={index}>
          <Link to={`/posts/${postID}`}>
            <h4>{post.title.rendered}</h4>
          </Link>
          <div dangerouslySetInnerHTML  = {{__html:post.excerpt.rendered}} />
        </div>
        )
      } else {
      let featuredImages = post.better_featured_image.source_url;
      let altImages = post.better_featured_image.alt_text;
      
        return (
          <div className="col-sm" key={index}>
            <Link to={`/posts/${postID}`}>
              <img src={featuredImages} alt={altImages} />
              <h4>{post.title.rendered}</h4>
            </Link>
            <div dangerouslySetInnerHTML  = {{__html:post.excerpt.rendered}} />
          </div>
        )
      }
    })
    return (
      <div className="container blog-posts">
        <h1>Blog Posts</h1>
        <h2>Lates posts</h2>
        <div className="row">
          {posts}
        </div>
      </div>
    );
  }
}

export default BlogCategory;
