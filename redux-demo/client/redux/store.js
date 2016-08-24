/**
 * Created by pomy on 8/23/16.
 */

'use strict';

import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import reducers from './reducers/index';

import customMiddleware from '../lib/custom-middleware';

// import log from '../lib/log';
// import log2 from '../lib/log2';
//sync store
//export let store = createStore(reducers);

//带中间件log
// let createStoreWithLog = applyMiddleware(log,log2)(createStore);
// export let store = createStoreWithLog(reducers);

//async with thunk
// let createStoreWithThunk = applyMiddleware(thunk)(createStore);
// export let store = createStoreWithThunk(reducers);

//async with custom
// let createStoreWithCustom = applyMiddleware(customMiddleware)(createStore);
// export let store = createStoreWithCustom(reducers);

//async with promise
let createStoreWithPromise = applyMiddleware(promiseMiddleware)(createStore);
export let store = createStoreWithPromise(reducers);