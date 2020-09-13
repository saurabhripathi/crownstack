import React, { Component } from 'react'
import Header from './header/Header'
import { Route, Switch } from 'react-router-dom'
import Home from '../home/Home'
import List from '../list/List'
import SubList from '../sub-list/Sub-List'
class Contant extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path = '/' exact
                        component = {Home}>
                    </Route>
                    <Route exact path = '/category'
                        component = {List}>
                    </Route>
                    <Route path = '/category/:id'
                        component = {SubList}>
                    </Route>
                </Switch>
            </React.Fragment>
        )
    }
}

export default Contant