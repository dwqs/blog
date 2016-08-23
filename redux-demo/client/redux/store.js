/**
 * Created by pomy on 8/23/16.
 */

'use strict';

import {createStore,applyMiddleware} from 'redux';

import reducers from './reducers/index';

import log from '../lib/log';
import log2 from '../lib/log2';

//export let store = createStore(reducers);

//带中间件log
let createStoreWithLog = applyMiddleware(log,log2)(createStore);
export let store = createStoreWithLog(reducers);