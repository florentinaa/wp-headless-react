import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {
    constructor(){
        super();
        this.state = {
            navigation: []
        }
    }
    componentDidMount() {
        let nav = 'https://flore.local/wp-json/header/navigation/';
        fetch(nav)
        .then(response => response.json())
        .then(response => {
          this.setState({
            navigation: response
          })
        })
    }
    render() {
        let nav = this.state.navigation;

        function getUrl(page){
            let url = page.url.split('/');
            let position = url.length-2;
            let partUrl =  page.object == "page" ? '/pages/' + url[position] : '/posts/' + url[position];
            return partUrl;
        }

        let links = nav.filter(item => item.menu_item_parent==='0').map((page,index) => {

            let navOtherLevel = nav.filter(subItem => subItem.menu_item_parent === `${page.ID}`).map((pageSubMenu,indexSubMenu) => {

                return (
                    <ul key={indexSubMenu}>
                        <li><Link to={getUrl(pageSubMenu)}>{pageSubMenu.title}</Link></li>
                    </ul>
                ) 
            })
            return (
                <li key={index}><Link to={getUrl(page)}>{page.title}</Link>
                    {navOtherLevel}
                </li>
            ) 
        })
        
        return(
        <div className="nav">
          {links}
        </div>
        )
    }
}

export default Nav;