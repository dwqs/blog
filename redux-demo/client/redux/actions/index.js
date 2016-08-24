/**
 * Created by pomy on 8/23/16.
 */

'use strict';

import {createAction} from 'redux-actions';

import * as CONSTANT from '../constant/index';

//sync
export let addTodo = createAction(CONSTANT.ADD_TO_DO);

//async with thunk
export let addTodoWithThunk = (val) => async (dispatch, getState)=>{
    //请求之前的一些处理

    let value = await Promise.resolve(val + ' thunk');
    dispatch({
        type:CONSTANT.ADD_TO_DO_THUNK,
        payload:{
            value
        }
    });
};

//async with custom
export let addTodoWithCustom = createAction(CONSTANT.ADD_TO_DO_CUSTOM, (val) => async (dispatch, getState)=>{
    let value = await Promise.resolve(val + ' custom');
    return {
        value
    };
});

//async with promise
export let addTodoWithPromise = createAction(CONSTANT.ADD_TO_DO_PROMISE, (val) =>
    (async (dispatch, getState)=>{
        let value = await Promise.resolve(val + ' promise');
        return {
            value
        };
    })()
);