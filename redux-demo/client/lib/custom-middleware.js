/**
 * Created by pomy on 8/24/16.
 */

'use strict';

function isPromise (val) {
    return val && typeof val.then === 'function';
}

export default function customMiddleware ({dispatch, getState}){
    return next => action =>{
        if(typeof action.payload === 'function'){
            let res = action.payload(dispatch, getState);
            if (isPromise(res)) {
                res.then(
                    (result) => {
                        dispatch({...action, payload: result});
                    },
                    (error) => {
                        dispatch({...action, payload: error, error: true});
                    }
                );
            } else {
                dispatch({...action, payload: res});
            }
        } else {
            next(action);
        }
    }
}
