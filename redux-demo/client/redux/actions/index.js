/**
 * Created by pomy on 8/23/16.
 */

'use strict';

import {createAction} from 'redux-actions';

import * as CONSTANT from '../constant/index';

export let addTodo = createAction(CONSTANT.ADD_TO_DO);