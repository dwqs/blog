/**
 * Created by pomy on 8/22/16.
 */

'use strict';

import 'babel-polyfill';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import {store} from '../redux/store';

import TodoListContainer from '../container/main/index';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={TodoListContainer}>
                <Route path="index" component={TodoListContainer}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('demo')
);


