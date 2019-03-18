import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import Home from './components/home'
import Login from './components/login'

class Router extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/login'>login</Link>
                        </li>
                    </ul>
                    <hr />
                    <Route path='/' component={Home} />
                    <Route path='/login' component={Login} />


                </div>

            </Router>
        )
    }
}

export default Router