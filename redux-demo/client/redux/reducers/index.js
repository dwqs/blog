/**
 * Created by pomy on 8/23/16.
 */

'use strict';

import {combineReducers} from 'redux';

import todoList from './todo-list';
import test from './test';

export default combineReducers({
    todoList,
    test
});
