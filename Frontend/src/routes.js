import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/main';
import SignIn from './pages/signin';
import SignOut from './pages/signout';
import People from './pages/people';
import Cadastro from './pages/cadastro';

export default class Routes extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={SignIn}/>
                    <Route path='/home' component={Main}/>
                    <Route path='/cadastro' component={SignOut} />
                    <Route path='/people/:id' component={People} />
                    <Route path='/people' component={Cadastro} />
                </Switch>
            </BrowserRouter>
        )
    }
};