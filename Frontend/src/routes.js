import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/main';
import SignIn from './pages/signin';

export default class Routes extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={SignIn}/>
                    <Route path='/home' component={Main}/>
                </Switch>
            </BrowserRouter>
        )
    }
};