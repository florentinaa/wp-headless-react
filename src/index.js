import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/index.css';
import Header from './components/header';
import Pages from './pages/pages';
import BlogCategory from './pages/blogCategory';
import BlogPost from './pages/blogPost';
import Footer from './components/footer';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Route exact path="/" component={BlogCategory} />
                <Route path='/posts/:id' component={BlogPost} />
                <Route path='/pages/:id' component={Pages} />
                <Footer />
            </div>
        )
    }       
}

ReactDOM.render( (
    <Router>
        <Home /> 
    </Router>
),
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
