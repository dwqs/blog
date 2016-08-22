/**
 * Created by pomy on 8/22/16.
 */

'use strict';
var compress = require('koa-compress');
var serve = require('koa-static');
var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var router = require('koa-router')();

var path = require('path');

var routerRegister = require('./router');

var app = koa();

app.use(bodyParser());
// Serve static files
app.use(serve(path.resolve(__dirname, './public')));
// Compress
app.use(compress());
//router
routerRegister.register(router);
app.use(router.middleware());

app.listen('9000','127.0.0.1',  () => {
    console.log('listening on port 9000...');
});
