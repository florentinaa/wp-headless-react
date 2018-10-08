import React, { Component } from 'react';

class Pages extends Component {
    constructor() {
        super();
        this.state = {
          pages: [],
        }
      }
      componentDidMount() {
        let slug = this.props.match.params.id;
        let pages = `https://flore.local/wp-json/wp/v2/pages?${slug}`
        fetch(pages)
        .then(response => response.json())
        .then(response => {
          this.setState({
            pages: response
          })
        })
      }
    render() {
      let slug = this.props.match.params.id;
      let pages = this.state.pages;
      let pageClass = '';
      let currentPage = [];
      pages.forEach((page)=>{
        if(page.slug === slug) {
          currentPage.push(page);
          pageClass = `page-${page.slug}`;
        };
      })
      return (
        <div className="container">
        {currentPage.map((page, index)=>
            <div className={pageClass} key={index}>
              <h1>{page.title.rendered}</h1>
              <div dangerouslySetInnerHTML  = {{__html:page.content.rendered}} />
            </div>
        )}
      </div>
    )
  }
    
}

export default Pages;