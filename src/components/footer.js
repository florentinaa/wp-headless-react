import React, { Component } from 'react';

class Footer extends Component {
    constructor(){
        super();
        this.state = {
            footer: []
        }
    }
    componentDidMount() {
        let footerUrl = 'https://flore.local/wp-json/wp-rest-api-sidebars/v1/sidebars/footer';
        fetch(footerUrl)
        .then(response=>response.json())
        .then(response => {
            this.setState({
                footer: response
            })
        })
    }
    render() {
        let sidebar = this.state.footer;
        return(
        <footer className="footer">
            <div dangerouslySetInnerHTML  = {{__html:sidebar.rendered}} />
        </footer>
        )
    }
}

export default Footer;