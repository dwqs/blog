/**
 * Created by pomy on 8/22/16.
 */

import 'babel-polyfill';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello';

ReactDOM.render(
    <Hello />,
    document.getElementById('demo')
);

