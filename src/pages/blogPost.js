import React, { Component } from 'react';

class BlogPost extends Component {  
    constructor() {
        super();
        this.state = {
            singlePost: {}
        }
      }
    componentDidMount() {
        let location = this.props.location.pathname;
        let PostUrl = `https://flore.local/wp-json/wp/v2${location}?_embeded`;
        fetch(PostUrl)
        .then(response => response.json())
        .then(response => {
            this.setState({
                singlePost: response
            })
        })
    }
    render() {
        let single = this.state.singlePost;
        
        if (Object.keys(single).length !== 0){
            console.log(single);
            let image = single.better_featured_image.source_url;
            let title = single.title.rendered;
            let content = single.content.rendered;
            return (
                <div className="container">
                    <img src={image} alt={single.better_featured_image.alt_text} />
                    <h1>{title}</h1>
                    <article dangerouslySetInnerHTML  = {{__html:content}} />
                </div>
            )
        } else {
            return '';
        }   
	}  
}

export default BlogPost;