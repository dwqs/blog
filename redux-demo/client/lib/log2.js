/**
 * Created by pomy on 8/24/16.
 */

'use strict';

export default function({getState,dispatch}) {
    return (next) => (action) => {
        console.log('我是第二个中间件1');
        next(action);
        console.log('我是第二个中间件2');
    }
}